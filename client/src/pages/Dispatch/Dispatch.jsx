import React, { Component } from 'react';
import EditableTable from './components/Table';
import PageHead from '../../components/PageHead';
import {Form} from 'antd';

export default class Dispatch extends Component {
  render() {
    const EditableFormTable = Form.create()(EditableTable);
    return (
      <div>
        <PageHead title="进货管理"/>
        <EditableFormTable />
      </div>
    );
  }
}
