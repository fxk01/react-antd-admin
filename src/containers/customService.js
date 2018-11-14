/*
 customService
 */

import React, { Component } from 'react';
import { Layout } from 'antd';
import '../styles/customService.less';
import Top from '../components/top/top';
import SiderLeft from '../components/siderLeft/siderLeft';
import CustomTem from '../components/customTem/customTem';

const data = [];
for (let i = 0; i < 3; i++) {
  data.push({
    key: i,
    name: `名称${i}`,
    service: `服务${i}`,
  });
}

class CustomService extends Component {
  constructor() {
    super();
    this.state = {
      columns: [{
        align: 'center',
        className: 'record-event-cs',
        title: '名称',
        dataIndex: 'name',
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '服务',
        dataIndex: 'service',
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '操作',
        dataIndex: 'operation',
        render() {
          return (
            <div>
              <span className="event-xg">修改</span><span className="event-xg event-xg-mp10">|</span><span className="event-xg">删除</span>
            </div>
          )
        }
      }],
      defaultKeys: {
        sub: 'sub3',
        num: '11',
      },
      titleText: {
        mt: 0,
        title: '登记备案模版',
      },
      titleText2: {
        mt: '40px',
        title: '包年服务模版',
      }
    };
  }

  render() {
    return (
      <div className="customService">
        <Layout>
          <Top />
          <Layout>
            <SiderLeft defaultKeys={this.state.defaultKeys} />
            <Layout style={{padding: '30px 40px 104px 40px'}}>
              <CustomTem titleText={this.state.titleText} columns={this.state.columns} data={data} />

              <CustomTem titleText={this.state.titleText2} columns={this.state.columns} data={data} />
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default CustomService;