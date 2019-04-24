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
      name: ['羽毛球', '乒乓球'][random(0, 1)],
      brand: ['李宁', '阿迪达斯', '耐克'][random(0, 1)],
      danwei: ['12只', '6只'][random(0, 1)],
      categary: ['运动', '休闲'][random(0, 1)],
      size: ['一筒', ''][random(0, 1)],
      weight: ['1kg', '0.5kg'][random(0, 1)],
      price: ['99.5', '29.5'][random(0, 1)],
      note: '',
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
    title: '商品编号',
    dataIndex: 'key',
    width: '5%',
  },
  {
    title: '商品名称',
    dataIndex: 'name',
    width: '10%',
  },
  {
    title: '商品分类',
    dataIndex: 'categary',
    width: '10%',
  },
  {
    title: '品牌',
    dataIndex: 'brand',
    width: '10%',
  },
  {
    title: '型号',
    dataIndex: 'size',
    width: '10%',
  },
  {
    title: '单位',
    dataIndex: 'danwei',
    width: '7%',
  },
  {
    title: '重量',
    dataIndex: 'weight',
    width: '5%',
  },
  {
    title: '售价',
    dataIndex: 'price',
    width: '10%',
  },
  {
    title: '备注',
    dataIndex: 'note',
    width: '5%',
  },
];

let columns= [
  {
      title: '商品编号',
      dataIndex: 'key',
      width: '5%',
      editable: false,
  },
  {
      title: '商品名称',
      dataIndex: 'name',
      width: '10%',
      editable: true,
  },
  {
      title: '商品分类',
      dataIndex: 'categary',
      width: '10%',
      editable: true,
  },
  {
      title: '品牌',
      dataIndex: 'brand',
      width: '10%',
      editable: true,
  },
  {
      title: '型号',
      dataIndex: 'size',
      width: '10%',
      editable: true,
  },
  {
      title: '单位',
      dataIndex: 'danwei',
      width: '7%',
      editable: true,
  },
  {
      title: '重量',
      dataIndex: 'weight',
      width: '5%',
      editable: true,
  },
  {
      title: '售价',
      dataIndex: 'price',
      width: '10%',
      editable: true,
  },
  {
      title: '备注',
      dataIndex: 'note',
      width: '15%',
      editable: true,
  }
];

let filterData=[
  {
    name:'商品名称',
    dataIndex: 'name',
    type:'input'
  },
  {
    name:'商品分类',
    dataIndex: 'categary',
    type:'select',
    options:[
      '休闲',
      '运动'
    ]
  },
{
    name: '品牌',
    dataIndex: 'brand',
    type:'input'
},
{
    name: '型号',
    dataIndex: 'size',
    type:'input'
},
{
    name: '单位',
    dataIndex: 'danwei',
      type:'input'
},
{
    name: '重量',
    dataIndex: 'weight',
    type:'input'
},
{
    name: '售价',
    dataIndex: 'price',
    type:'input'
},
{
    name: '备注',
    dataIndex: 'note',
    type:'input'
}
]
// MOCK 数据，实际业务按需进行替换
const getData = (length = 14) => {
  return Array.from({ length }).map((item, key) => {
    return {
      key: key + 1,
      name: ['羽毛球', '乒乓球'][random(0, 1)],
      brand: ['李宁', '阿迪达斯', '耐克'][random(0, 1)],
      danwei: ['12只', '6只'][random(0, 1)],
      categary: ['运动', '休闲'][random(0, 1)],
      size: ['一筒', ''][random(0, 1)],
      weight: ['1kg', '0.5kg'][random(0, 1)],
      price: ['99.5', '29.5'][random(0, 1)],
      note: ['基本上没有备注', ''][random(0, 1)],
    };
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