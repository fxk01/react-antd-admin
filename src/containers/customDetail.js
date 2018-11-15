/*
 customDetail
 */

import React, { Component } from 'react';
import { Layout } from 'antd';
import '../styles/customDetail.less';
import Top from '../components/top/top';
import SiderLeft from '../components/siderLeft/siderLeft';
import NewCustomTem from '../components/newCustomTem/newCustomTem';

class CustomDetail extends Component {
  constructor() {
    super();
    this.state = {
      defaultKeys: {
        sub: 'sub3',
        num: '11',
      },
    };
  }

  render() {
    return (
      <div className="customDetail">
        <Layout>
          <Top />
          <Layout>
            <SiderLeft defaultKeys={this.state.defaultKeys} />
            <Layout style={{padding: '30px 40px 104px 40px'}}>
              <NewCustomTem />
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default CustomDetail;