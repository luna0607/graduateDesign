import React, { Component } from 'react';
import EditableTable from '../../../../components/EditableTable/index'
import {Table,Form} from 'antd';
import axios from 'axios'


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
      dataIndex: 'category',
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
    dataIndex: 'category',
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


export default class TableView extends Component {

  fetchData = () => {
    return new Promise((resolve) => {
      axios.get('/IMS/goods/')
      .then(function (response) {
        console.log( response.data.data)
        resolve(response.data.data)
        //resolve [{index:1,buyerId:"124343",buyerName:"yinywf",contact:"15996262601"}];
      })
      .catch(function (error) {
        console.log(error);
      });
    });
  };


  render() {
    const EditableFormTable = Form.create()(EditableTable);    
  return (
      <div>
        <EditableFormTable filterData={filterData} fetchData={this.fetchData}  columns={columns}  />
      </div>
    );
  }
}