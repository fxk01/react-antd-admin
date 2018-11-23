/*
 useTemplate
 */

import React, { Component } from 'react';
import { Layout } from 'antd';
import '../styles/registerRecord.less';
import Top from '../components/top/top';
import SiderLeft from '../components/siderLeft/siderLeft';
import SearchConditions from '../components/searchConditions/searchConditions';

class UseTemplate extends Component {
  constructor() {
    super();
    this.state = {
      defaultKeys: {
        sub: 'sub3',
        num: '11',
      }
    };
  }

  render() {
    return (
      <div className="registerRecord useTemplate">
        <Layout>
          <Top />
          <Layout>
            <SiderLeft defaultKeys={this.state.defaultKeys} />
            <Layout style={{padding: '30px 40px 104px 40px'}}>
              <SearchConditions />

              {/*<EventInformation columns={this.state.columns} data={data} />*/}
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default UseTemplate;