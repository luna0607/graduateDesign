/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { DatePicker,Grid, Input, Select } from '@alifd/next';
import {
    FormBinderWrapper as IceFormBinderWrapper,
    FormBinder as IceFormBinder,
    FormError as IceFormError,
} from '@icedesign/form-binder';
import {Button} from 'antd'
const { Row, Col } = Grid;
const { RangePicker } = DatePicker;


export default class Filter extends Component {
    state = {
        value: {},
    };

    formChange = (value) => {
        //this.props.onChange(value);
    };

    render() {
        let doms = []
        let filterData = this.props.filterData;
        console.log("okkkkkkkkkk")
        console.log(filterData)
        for (let item of filterData) {

            if (item.type === 'input') {
                doms.push(<Col>
                    <div style={styles.formItem}>
                        <span style={styles.formLabel}>{item.name}</span>
                        <IceFormBinder triggerType="onBlur" name={item.dataIndex}>
                            <Input placeholder="请输入" style={{ width: '200px' }} value={this.state.value[item.dataIndex]} />
                        </IceFormBinder>
                        <div style={styles.formError}>
                            <IceFormError name={item.dataIndex} />
                        </div>
                    </div>
                </Col>)
            }
            if (item.type === 'select') {
                let optionDom = []
                for (let option of item.options) {
                    optionDom.push(<Select.Option value={option}>{option}</Select.Option>)
                }
                doms.push(
                    <Col >
                        <div style={styles.formItem}>
                            <span style={styles.formLabel}>{item.name}</span>
                            <IceFormBinder triggerType="onBlur" name={item.dataIndex}>
                                <Select style={{ width: '200px' }} value={this.state.value[item.dataIndex]}>
                                    {optionDom}
                                </Select>
                            </IceFormBinder>
                            <div style={styles.formError}>
                                <IceFormError name={item.dataIndex}/>
                            </div>
                        </div>
                    </Col>
                )
            }
            if(item.type==='date'){
                doms.push( <Col >
                  <div style={styles.formItem}>
                    <span style={styles.formLabel}>{item.name}</span>
                    <IceFormBinder triggerType="onBlur" name={item.dataIndex}>
                      <RangePicker placeholder="请输入" style={{ width: '240px' }} value={this.state.value[item.dataIndex]}/>
                    </IceFormBinder>
                    <div style={styles.formError}>
                      <IceFormError name={item.dataIndex} />
                    </div>
                  </div>
                </Col>)
            }
        }
        return (
            <IceFormBinderWrapper
                value={this.state.value}
                onChange={this.formChange}
                ref="form"
            >
                <Row wrap gutter="20" style={styles.formRow}>
                {doms}
                <Col >
                        <div style={styles.formItem}>
                        <Button type="primary" onClick={this.props.onClick.bind(null,this.state.value)}>添加</Button>
                        </div>
                    </Col>
                </Row>
            </IceFormBinderWrapper>
        );
    }
}

const styles = {
    formItem: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0',
    },
    formLabel: {
        minWidth: '80px',
    },
};
