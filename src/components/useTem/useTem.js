/*
 useTem组件
 */

import React, { Component } from 'react';
import '../searchConditions/searchConditions.less';
import './useTem.less'
import { Layout, Input, Select, DatePicker, Button } from 'antd';
const { Content } = Layout;
const Option = Select.Option;

function onChange(date, dateString) {
  console.log(date, dateString);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class useTem extends Component {
  render() {
    const { data } = this.props;
    return (
      <Content className="record-content useTem">
        <p className="record-searchText">{decodeURIComponent(this.props.name)}</p>
        <div style={{ margin: '0 45px'}}>
          <div className="search-tj-list flex flex-align-center">
            <ul className="flex">
              {data.nodes.map((todo, index) =>
                <li key={todo.id}>{todo.name}</li>
              )}
            </ul>
          </div>

          <div className="record-from-ss">
            <ul className="flex" style={{ marginBottom: 0}}>
              <li className="flex flex-1 flex-align-center">
                <p className="record-mt10" style={{ width: '105px' }}>负责人：</p>
                <Input placeholder="公司名称" style={{ height: '40px' }}/>
              </li>
              <li className="flex flex-1 flex-align-center">
                <p className="record-mt10" style={{ width: '130px' }}>开始时间：</p>
                <DatePicker style={{ width: '100%' }} onChange={onChange} />
              </li>
              <li className="flex flex-1 flex-align-center">
                <p className="record-mt10" style={{ width: '130px' }}>结束时间：</p>
                <DatePicker style={{ width: '100%' }} onChange={onChange} />
              </li>
              <li className="flex flex-1 flex-align-center">
                <p className="record-mt10" style={{ width: '75px' }}>状态：</p>
                <Select defaultValue="新建" style={{ width: '100%' }} onChange={handleChange}>
                  <Option value="0">新建</Option>
                  <Option value="1">进行中</Option>
                  <Option value="2">障碍搁浅</Option>
                  <Option value="3">已完成</Option>
                </Select>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ margin: '70px 45px 0 45px'}}>
          {/*<div className="search-tj-list flex flex-align-center">*/}
            {/*<ul className="flex">*/}
              {/*<li>事件一</li>*/}
              {/*<li>事件二</li>*/}
              {/*<li>事件三</li>*/}
              {/*<li>事件四</li>*/}
            {/*</ul>*/}
          {/*</div>*/}

          {/*<div className="record-from-ss">*/}
            {/*<ul className="flex mg0">*/}
              {/*<li className="flex flex-1 flex-align-center">*/}
                {/*<p className="record-mt10" style={{ width: '105px' }}>负责人：</p>*/}
                {/*<Input placeholder="公司名称" style={{ height: '40px' }}/>*/}
              {/*</li>*/}

              {/*<li className="flex flex-1 flex-align-center">*/}
                {/*<p className="record-mt10" style={{ width: '130px' }}>开始时间：</p>*/}
                {/*<DatePicker style={{ width: '100%' }} onChange={onChange} />*/}
              {/*</li>*/}
              {/*<li className="flex flex-1 flex-align-center">*/}
                {/*<p className="record-mt10" style={{ width: '130px' }}>结束时间：</p>*/}
                {/*<DatePicker style={{ width: '100%' }} onChange={onChange} />*/}
              {/*</li>*/}


              {/*<li className="flex flex-1 flex-align-center">*/}
                {/*<p className="record-mt10" style={{ width: '75px' }}>状态：</p>*/}
                {/*<Select defaultValue="lucy" style={{ width: '100%' }} onChange={handleChange}>*/}
                  {/*<Option value="jack">Jack</Option>*/}
                  {/*<Option value="lucy">Lucy</Option>*/}
                  {/*<Option value="disabled" disabled>Disabled</Option>*/}
                  {/*<Option value="Yiminghe">yiminghe</Option>*/}
                {/*</Select>*/}
              {/*</li>*/}
            {/*</ul>*/}
          {/*</div>*/}

          <div style={{textAlign: 'right', margin: '120px 0'}}>
            <Button type="primary" className="submitOk">下一步</Button>
            <Button type="primary" className="backOk">取消</Button>
          </div>
        </div>
      </Content>
    );
  }
}

export default useTem;