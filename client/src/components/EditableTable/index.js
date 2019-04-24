import {
    DatePicker, Table, Input, InputNumber, Popconfirm, Form, Select, Badge,Collapse
} from 'antd';
import moment from 'moment';
import React from 'react'
import IceContainer from '@icedesign/container';
import Filter from '../Filter/index'
import Add from '../Add/index'
const Panel = Collapse.Panel;
const styles = {
    pagination: {
        marginTop: '20px',
        textAlign: 'right',
    },
};

const FormItem = Form.Item;
const EditableContext = React.createContext();

class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber />;
        }
        if (this.props.dataIndex === 'categary') {
            return <Select>
                <Option value="休闲">休闲</Option>
                <Option value="运动">运动</Option>
            </Select>;
        }
        if (this.props.dataIndex === 'brand') {
            return <Select>
                <Option value="阿迪达斯">阿迪达斯</Option>
                <Option value="耐克">耐克</Option>
                <Option value="李宁">李宁</Option>
            </Select>;
        }
        if (this.props.dataIndex === 'note') {
            return <Input.TextArea rows={4} />;
        }
        // if (this.props.dataIndex === 'time') {
        //     console.log(this.props.record.time)
        //     //return this.props
        //     return <DatePicker defaultValue={moment(this.props.record.time)}/>;
        // }
        return <Input />;
    };

    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            ...restProps
        } = this.props;
        return (
            <EditableContext.Consumer>
                {(form) => {
                    const { getFieldDecorator } = form;
                    return (
                        <td {...restProps}>
                            {editing ? (
                                <FormItem style={{ margin: 0 }}>
                                    {getFieldDecorator(dataIndex, {
                                        rules: [{
                                            required: true,
                                            message: `Please Input ${title}!`,
                                        }],
                                        initialValue: record[dataIndex],
                                    })(this.getInput())}
                                </FormItem>
                            ) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}

export default class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], editingKey: '' };
        let cols = this.props.columns;
        if(cols.length>4&&cols[cols.length-1].title!=='操作'){
            cols.push({
                title: '操作',
                dataIndex: 'operation',
                render: (text, record) => {
                    const { editingKey } = this.state;
                    const editable = this.isEditing(record);
                    return (
                        <div>
                            {editable ? (
                                <span>
                                    <EditableContext.Consumer>
                                        {form => (
                                            <a
                                                href="javascript:;"
                                                onClick={() => this.save(form, record.key)}
                                                style={{ marginRight: 8 }}
                                            >
                                                保存
                        </a>
                                        )}
                                    </EditableContext.Consumer>
                                    <Popconfirm
                                        title="确定取消吗？"
                                        onConfirm={() => this.cancel(record.key)}
                                    >
                                        <a>取消</a>
                                    </Popconfirm>
                                </span>
                            ) : (
                                    <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>编辑</a>
                                )}
                        </div>
                    );
                },
            })
        }
        this.columns = cols;
    }

    componentDidMount() {
        this.props.fetchData().then((res) => {
            this.setState({ data: res })
        })
    }

    handleFilterChange = () => {
        this.props.fetchData(5).then((res) => {
            this.setState({ data: res })
        })
    };

    isEditing = record => record.key === this.state.editingKey;

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...this.state.data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ data: newData, editingKey: '' });
            } else {
                newData.push(row);
                this.setState({ data: newData, editingKey: '' });
            }
        });
    }

    edit(key) {
        this.setState({ editingKey: key });
    }

    render() {
        const components = {
            body: {
                cell: EditableCell,
            },
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: col.dataIndex === 'categary' ? 'select' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });

        return (
            <div style={styles.container}>
                <Collapse defaultActiveKey={['2']}  bordered={false}  >
                    <Panel header="添加" key="1">
                        <IceContainer>
                            <Add onClick={this.handleFilterChange} filterData={this.props.filterData} />
                        </IceContainer>
                    </Panel>
                    <Panel header="数据查找" key="2">
                        <IceContainer>
                            <Filter onChange={this.handleFilterChange} filterData={this.props.filterData} />
                        </IceContainer>
                        <IceContainer>
                            <EditableContext.Provider value={this.props.form}>
                                <Table
                                    components={components}
                                    bordered
                                    dataSource={this.state.data}
                                    columns={columns}
                                    rowClassName="editable-row"
                                    pagination={{
                                        onChange: this.cancel,
                                    }}
                                    expandedRowRender={this.props.expandedRowRender}

                                />
                            </EditableContext.Provider>
                        </IceContainer>

                    </Panel>
                </Collapse>,
                 </div>
        );
    }
}