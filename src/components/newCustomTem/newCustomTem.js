/*
 newCustomTem组件
 */

import React, { Component } from 'react';
import './newCustomTem.less';
import hoc from '../../utils/hoc';
import { Layout } from 'antd';
const { Content } = Layout;

@hoc
class NewCustomTem extends Component {
  constructor() {
    super();
    this.state = {
      val: this.getAge('val')
    };
  };

  render() {
    return (
      <Content className="record-content newCustomTem" style={{marginTop: '0'}}>
        <div className="flex flex-justify-between" style={{margin: '20px 45px 0 0'}}>
          <p className="record-searchText">{decodeURIComponent(this.state.val)}</p>
        </div>
        <div style={{ margin: '0 45px 44px 45px'}}>

        </div>
      </Content>
    );
  }
}

export default NewCustomTem;