/*
 searchConditions组件
 */

import React, { Component } from 'react';
import './searchConditions.less';
import { Layout, Input, Select, DatePicker, Button } from 'antd';
const { Content } = Layout;
const Option = Select.Option;
const { RangePicker } = DatePicker;

let queryEventData = {
  templateId: '',
  nodeIds: '',
  name: '',
  status: 0,
  startTime: '',
  endTime: '',
};

class SearchConditions extends Component {
  constructor() {
    super();
    this.state = {
      nodes: [],
    };
    this.onChangeTime = this.onChangeTime.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.nodes.length > 0) {
      return false;
    }
    queryEventData.templateId = nextProps.data.nodes[0].templateId;
    this.setState({
      nodes: nextProps.data.nodes
    }, () => {
      let nodes = this.state.nodes;
      for(let i = 0, l = this.state.nodes.length; i < l; i++) {
        nodes[i]['ifClass'] = false
      }
    })
  }

  activeNodesClass(index) {
    let nodes = this.state.nodes;
    nodes[index].ifClass = !nodes[index].ifClass;
    this.setState({
      nodes: nodes
    }, () => {
      queryEventData.nodeIds = '';
      this.state.nodes.forEach((todo) => {
        if(todo.ifClass === true) {
          queryEventData.nodeIds += todo.id + ',';
        }
      });
    });
  }

  getCompanyName(e) {
    queryEventData.name = e.target.value;
  }

  onChangeTime(date, dateString) {
    queryEventData.startTime = dateString[0];
    queryEventData.endTime = dateString[1]
  }

  handleChange(value) {
    queryEventData.status = value;
  }

  render() {
    return (
      <Content className="record-content">
        <p className="record-searchText">搜索条件</p>
        <div style={{ margin: '0 45px'}}>
          <div className="search-tj-list">
            <ul>
              {this.state.nodes.map((todo, index) =>
                <li key={todo.id} className={`${todo.ifClass === true ? 'activeNodesOn' : null}`} onClick={()=>{this.activeNodesClass(index)}}>{todo.name}</li>
              )}
            </ul>
          </div>

          <div className="record-from-ss">
            <ul className="flex flex-align-end">
              <li className="flex-1">
                <p className="record-mt10">公司名称</p>
                <Input placeholder="公司名称" style={{ height: '40px' }} onChange={(e)=>this.getCompanyName(e)}/>
              </li>
              <li className="flex-1">
                <p className="record-mt10">状态</p>
                <Select defaultValue="新建" style={{ width: '100%' }} onChange={this.handleChange}>
                  <Option value={0}>新建</Option>
                  <Option value={1}>进行中</Option>
                  <Option value={2}>障碍搁浅</Option>
                  <Option value={3}>已完成</Option>
                </Select>
              </li>
              <li className="flex-1">
                <p className="record-mt10">派发时间</p>
                <RangePicker style={{ width: '100%' }} onChange={this.onChangeTime}/>
              </li>
              <li>
                <Button type="primary" className="record-newBn" onClick={()=>this.props.recordList(queryEventData)}>搜索</Button>
              </li>
            </ul>
          </div>
        </div>
      </Content>
    );
  }
}

export default SearchConditions;