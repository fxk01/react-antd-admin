/*
 searchConditions组件
 */

import React, { Component } from 'react';
import './searchConditions.less';
import { Layout, Input, Select, DatePicker, Button } from 'antd';
const { Content } = Layout;
const Option = Select.Option;

function onChange(date, dateString) {
  console.log(date, dateString);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class SearchConditions extends Component {
  render() {
    return (
      <Content className="record-content">
        <p className="record-searchText">搜索条件</p>
        <div style={{ margin: '0 45px'}}>
          <div className="search-tj-list flex flex-align-center">
            <ul className="flex">
              <li>备案自查</li>
              <li>基础材料</li>
              <li>法律意见书</li>
              <li>备案自查</li>
              <li>基础材料</li>
            </ul>
          </div>

          <div className="record-from-ss">
            <ul className="flex flex-align-end">
              <li className="flex-1">
                <p className="record-mt10">公司名称</p>
                <Input placeholder="公司名称" style={{ height: '40px' }}/>
              </li>
              <li className="flex-1">
                <p className="record-mt10">状态</p>
                <Select defaultValue="lucy" style={{ width: '100%' }} onChange={handleChange}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>Disabled</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
              </li>
              <li className="flex-1">
                <p className="record-mt10">派发时间</p>
                <DatePicker style={{ width: '100%' }} onChange={onChange} />
              </li>
              <li>
                <Button type="primary" className="record-newBn">搜索</Button>
              </li>
            </ul>
          </div>
        </div>
      </Content>
    );
  }
}

export default SearchConditions;