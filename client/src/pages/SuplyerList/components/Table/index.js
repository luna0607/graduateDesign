import React, { Component } from 'react';
import EditableTable from '../../../../components/EditableTable/index'
import {Table,Form} from 'antd';

// Random Numbers
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const expandedRowRender = () => {
  const columns = childrenColumns;
  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      index: i,
      date: '2014-12-24 23:12:00',
      name: ['张三', '李四'][random(0, 1)],
      id: ['12345674', '784537298720', '74883'][random(0, 2)],
      phone: ['13067937265', '17683672679'][random(0, 1)],
      // credit: ['20', '400'][random(0, 1)],
    });
  }
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};

let childrenColumns = [
  { title: '历史纪录', dataIndex: 'index', key: 'index' },
  { title: '操作日期', dataIndex: 'date', key: 'date' },
  {
    title: '供应商名',
    dataIndex: 'name',
    width: '15%',
  },
  {
    title: '编号',
    dataIndex: 'id',
    width: '15%',
  },
  {
    title: '联系方式',
    dataIndex: 'phone',
    width: '10%',
  },
];

let columns= [
  {
    title: '供应商名',
    dataIndex: 'name',
    width: '25%',
  },
  {
    title: '编号',
    dataIndex: 'id',
    width: '25%',
  },
  {
    title: '联系方式',
    dataIndex: 'phone',
    width: '20%',
  },
];

let filterData=[
  {
    name:'供应商名',
    dataIndex: 'name',
    type:'input'
  },
  {
    name:'编号',
    dataIndex: 'id',
    type:'input',
  },
]
// MOCK 数据，实际业务按需进行替换
const getData = (length = 14) => {
  return Array.from({ length }).map((item, key) => {
    return {
      index: key,
      name: ['张三', '李四'][random(0, 1)],
      id: ['12345674', '784537298720', '74883'][random(0, 2)],
      phone: ['13067937265', '17683672679'][random(0, 1)],

   //   credit: ['20', '400'][random(0, 1)],
    }
  });
};

export default class TableView extends Component {

  fetchData = (len) => {
        return this.mockApi(len)
  };

  mockApi = (len) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len));
      }, 600);
    });
  };

  render() {
    const EditableFormTable = Form.create()(EditableTable);    
  return (
      <div>
        <EditableFormTable filterData={filterData} fetchData={this.fetchData} expandedRowRender={expandedRowRender} columns={columns} childrenColumns={childrenColumns} />
      </div>
    );
  }
}