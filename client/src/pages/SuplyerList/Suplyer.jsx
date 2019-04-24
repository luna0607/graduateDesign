import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import EditableTable from './components/Table';
import PageHead from '../../components/PageHead';
import {Form} from 'antd';

@withRouter
export default class Suplyer extends Component {
  handleClick = () => {
    this.props.history.push('add/goods');
  };

  render() {
    const EditableFormTable = Form.create()(EditableTable);
    return (
      <div>
        <PageHead
          title="供应商管理"
        />
        <EditableFormTable />
      </div>
    );
  }
}
