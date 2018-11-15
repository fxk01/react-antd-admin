/*
 customTem组件
 */

import React, { Component } from 'react';
import './customTem.less';
import { Layout, Table, Button } from 'antd';
const { Content } = Layout;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    // disabled: record.name === 'Disabled User',
    name: record.name,
  }),
};

class CustomTem extends Component {
  constructor() {
    super();
    this.state = {
      size: 'large',
    }
  }
  render() {
    return (
      <Content className="record-content customTem" style={{marginTop: this.props.titleText.mt}}>
        <div className="flex flex-justify-between" style={{margin: '20px 45px 0 0'}}>
          <p className="record-searchText">{this.props.titleText.title}</p>
          <Button className="record-newBn" type="primary" onClick={() => this.props.showModal()} size={this.state.size}>新建模版</Button>
        </div>
        <div style={{ margin: '0 45px 44px 45px'}}>
          <Table rowSelection={rowSelection} columns={this.props.columns} dataSource={this.props.data} />
        </div>
      </Content>
    );
  }
}

export default CustomTem;