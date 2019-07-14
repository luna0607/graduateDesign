import React, { Component } from 'react';
import EditableTable from '../../../../components/EditableTable/index'
import {Table,Form} from 'antd';
import axios from 'axios'


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
      title: '规格',
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
    title: '材料',
    dataIndex: 'material',
    width: '5%',
    editable: true,
},
{
  title: '型号',
  dataIndex: 'model',
  width: '5%',
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
    name: '规格',
    dataIndex: 'size',
    type:'input'
},
{
  name: '材料',
  dataIndex: 'material',
  type:'input'
},
{
  name: '型号',
  dataIndex: 'model',
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

let addData=(good)=>{
  return new Promise((resolve,reject)=>{
    axios.post('/IMS/goods/add',good).then(function(response){
      console.log(response)
      if(response.data.code==1){
        alert(response.data.msg);
        reject()
      }else{
        resolve(response)
      }
    });
  })
}

export default class TableView extends Component {

  fetchData = () => {
    return new Promise((resolve) => {
      axios.get('/IMS/goods/')
      .then(function (response) {
        console.log( response.data.data)
        let result=[];
        for(let tmp of response.data.data){
          tmp.key=tmp.goodsId;
          result.push(tmp)
        }
        resolve(result)
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
        <EditableFormTable addData={addData} filterData={filterData} fetchData={this.fetchData}  columns={columns}  />
      </div>
    );
  }
}