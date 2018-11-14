/*
 yearService
 */

import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import '../styles/yearService.less';
import Top from '../components/top/top';
import SiderLeft from '../components/siderLeft/siderLeft';
import SearchConditions from '../components/searchConditions/searchConditions';
import EventInformation from '../components/eventInformation/eventInformation';

const data = [];
for (let i = 0; i < 16; i++) {
  data.push({
    key: i,
    companyName: `公司名称${i}`,
    parameter: `参数要素说明${i}`,
    agent: `经办人${i}`,
    state: `状态${i}`,
  });
}

class YearService extends Component {
  constructor() {
    super();
    this.state = {
      size: 'large',
      columns: [{
        align: 'center',
        className: 'record-event-cs',
        title: '公司名称',
        dataIndex: 'companyName',
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '参数要素说明',
        dataIndex: 'parameter',
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '经办人',
        dataIndex: 'agent',
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '状态',
        dataIndex: 'state',
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
        num: '10',
      }
    };
  }

  render() {
    const size = this.state.size;
    return (
      <div className="yearService">
        <Layout>
          <Top />
          <Layout>
            <SiderLeft defaultKeys={this.state.defaultKeys} />
            <Layout style={{padding: '30px 40px 104px 40px'}}>
              <Button type="primary" size={size} className="record-newBn">新建服务</Button>
              <SearchConditions />

              <EventInformation columns={this.state.columns} data={data} />
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default YearService;