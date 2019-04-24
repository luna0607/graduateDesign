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
      prize: ['99.5', '29.5'][random(0, 1)],
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
    editable: false,
},
{
    title: '商品名称',
    dataIndex: 'name',
    width: '10%',
    editable: true,
},
{
    title: '单价',
    dataIndex: 'price',
    width: '10%',
    editable: true,
},
{
    title: '总额',
    dataIndex: 'totalPrice',
    width: '10%',
    editable: true,
},
{
    title: '税',
    dataIndex: 'tax',
    width: '10%',
    editable: true,
},
{
    title: '进货商',
    dataIndex: 'danwei',
    width: '7%',
    editable: true,
},
{
    title: '备注',
    dataIndex: 'note',
    width: '15%',
    editable: true,
}
];

let columns= [
  {
    title: '进货时间',
    dataIndex: 'time',
    width: '15%',
    editable: false,
},
  {
      title: '商品编号',
      dataIndex: 'key',
      width: '5%',
      editable: true,
  },
  {
      title: '商品名称',
      dataIndex: 'name',
      width: '10%',
      editable: true,
  },
  {
    title: '数量',
    dataIndex: 'num',
    width: '10%',
    editable: true,
  },
  {
      title: '单价',
      dataIndex: 'price',
      width: '10%',
      editable: true,
  },
  {
      title: '总额',
      dataIndex: 'totalPrice',
      width: '10%',
      editable: true,
  },
  {
      title: '税',
      dataIndex: 'tax',
      width: '10%',
      editable: true,
  },
  {
      title: '进货商',
      dataIndex: 'suplyer',
      width: '7%',
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
  // {
  //   name:'商品分类',
  //   type:'select',
  //   options:[
  //     '休闲',
  //     '运动'
  //   ]
  // },
  {
    name:'进货时间',
    dataIndex: 'time',
    type:'date'
  },
  {
    name: '数量',
    dataIndex: 'num',
    type:'input'
  },
  {
      name: '单价',
      dataIndex: 'price',
      type:'input'
  },
  {
      name: '总额',
      dataIndex: 'totalPrice',
      type:'input'
  },
  {
      name: '税',
      dataIndex: 'tax',
      type:'input'
  },
  {
      name: '进货商',
      dataIndex: 'suplyer',
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
      time:new Date().toLocaleString(),
      name: ['羽毛球', '乒乓球'][random(0, 1)],
      danwei: ['12只', '6只'][random(0, 1)],
      tax: ['13%', '5%'][random(0, 1)],
      size: ['一筒', ''][random(0, 1)],
      weight: ['1kg', '0.5kg'][random(0, 1)],
      price: ['99.5', '29.5'][random(0, 1)],
      totalPrice: ['99.5', '29.5'][random(0, 1)],
      num:['100', '50'][random(0, 1)],
      suplyer:['福建某公司', '苏州某厂'][random(0, 1)],
      note: ['无', ''][random(0, 1)],
    };
  });
};

export default class TableView extends Component {
  handleClick = () => {
    this.props.history.push('add/order');
  };

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