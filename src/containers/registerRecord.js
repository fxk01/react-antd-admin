/*
 registerRecord
 */

import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import '../styles/registerRecord.less';
import Top from '../components/top/top';
import SiderLeft from '../components/siderLeft/siderLeft';
import SearchConditions from '../components/searchConditions/searchConditions';
import EventInformation from '../components/eventInformation/eventInformation';

const data = [];
for (let i = 0; i < 26; i++) {
  data.push({
    key: i,
    eventId: `${i}`,
    companyName: `公司名称${i}`,
    eventName: `事件名称${i}`,
    mobilePhoneNum: `手机号${i}`,
    agent: `经办人${i}`,
    speed: `进度${i}`,
    state: `状态${i}`,
    distributionTime: `派发时间${i}`,
    endTime: `结束时间${i}`,
  });
}

class RegisterRecord extends Component {
  constructor() {
    super();
    this.state = {
      size: 'large',
      columns: [{
        align: 'center',
        className: 'record-event-cs',
        title: '事件ID',
        dataIndex: 'eventId',
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '公司名称',
        dataIndex: 'companyName',
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '事件名称',
        dataIndex: 'eventName',
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '手机号',
        dataIndex: 'mobilePhoneNum',
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '经办人',
        dataIndex: 'agent',
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '进度',
        dataIndex: 'speed',
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '状态',
        dataIndex: 'state',
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '派发时间',
        dataIndex: 'distributionTime',
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '结束时间',
        dataIndex: 'endTime',
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
        num: '9',
      }
    };
  }

  render() {
    const size = this.state.size;
    return (
      <div className="registerRecord">
        <Layout>
          <Top />
          <Layout>
            <SiderLeft defaultKeys={this.state.defaultKeys} />
            <Layout style={{padding: '30px 40px 104px 40px'}}>
              <Button type="primary" size={size} className="record-newBn">新建备案</Button>
              <SearchConditions />

              <EventInformation columns={this.state.columns} data={data} />
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default RegisterRecord;