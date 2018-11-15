/*
 customService
 */

import React, { Component } from 'react';
import { Layout, Modal, Button, Input } from 'antd';
import { withRouter } from "react-router-dom";
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
              <span className="event-xg">编辑</span><span className="event-xg event-xg-mp10">|</span><span className="event-xg">删除</span>
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
      },
      loading: false,
      visible: false,
      temNameValue: '',
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.getTemValue = this.getTemValue.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  };

  handleOk() {
    this.setState({ loading: true });
    let codeVal = encodeURIComponent(this.state.temNameValue);
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
      window.open(`/customDetail?val=${codeVal}`, '_blank');
      // this.props.history.push('/customDetail?tab=2');
    }, 1000);
  };

  handleCancel() {
    this.setState({ visible: false });
  };

  getTemValue(e) {
    this.setState({
      temNameValue: e.target.value
    });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div className="customService">
        <Modal
          width="500px"
          wrapClassName="customModal"
          visible={visible}
          title="  "
          centered={false}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" type="primary" className="submitOk" loading={loading} onClick={this.handleOk}>确定</Button>,
            <Button key="back" className="backOk" onClick={this.handleCancel}>取消</Button>,
          ]}
        >
          <div className="flex flex-align-baseline">
            <p style={{width: '100px', margin: 0}}>模版名称：</p>
            <Input size="large" placeholder="" onChange={this.getTemValue} />
          </div>
        </Modal>

        <Layout>
          <Top />
          <Layout>
            <SiderLeft defaultKeys={this.state.defaultKeys} />
            <Layout style={{padding: '30px 40px 104px 40px'}}>
              <CustomTem showModal={this.showModal} titleText={this.state.titleText} columns={this.state.columns} data={data} />

              <CustomTem showModal={this.showModal} titleText={this.state.titleText2} columns={this.state.columns} data={data} />
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(CustomService);