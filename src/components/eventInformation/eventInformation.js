/*
 eventInformation组件
 */

import React, { Component } from 'react';
import './eventInformation.less';
import { Layout, Table } from 'antd';
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

class EventInformation extends Component {
  render() {
    return (
      <Content className="record-content eventInformation">
        <p className="record-searchText">事件信息</p>
        <div style={{ margin: '0 45px 44px 45px'}}>
          <Table rowSelection={rowSelection} columns={this.props.columns} dataSource={this.props.data} />
        </div>
      </Content>
    );
  }
}

export default EventInformation;