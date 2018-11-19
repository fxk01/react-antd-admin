/*
 customService
 */

import React, { Component } from 'react';
import { Layout, Modal, Button, Input, Select } from 'antd';
import { withRouter } from 'react-router-dom';
import '../styles/customService.less';
import Top from '../components/top/top';
import SiderLeft from '../components/siderLeft/siderLeft';
import CustomTem from '../components/customTem/customTem';

const data = [];
const Option = Select.Option;
for (let i = 0; i < 3; i++) {
  data.push({
    key: i,
    name: `名称${i}`,
    service: `服务${i}`,
  });
}

function handleChange(value) {
  console.log(`selected ${value}`);
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
        render: (text, record) => {
          return (
            <div>
              <span className="event-xg">复制</span><span className="event-xg event-xg-mp10">|</span>
              <span className="event-xg">编辑</span><span className="event-xg event-xg-mp10">|</span><span className="event-xg">删除</span>
              <Button type="primary" className="custom-operation" onClick={this.showModalUse}>使用</Button>
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
      visibleUse: false,
      temNameValue: '',
    };
    this.showModal = this.showModal.bind(this);
    this.showModalUse = this.showModalUse.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleOkUse = this.handleOkUse.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCancelUse = this.handleCancelUse.bind(this);
    this.getTemValue = this.getTemValue.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  };

  showModalUse() {
    this.setState({
      visibleUse: true,
    });
  }

  handleOk() {
    this.setState({ loading: true });
    let codeVal = encodeURIComponent(this.state.temNameValue);
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
      window.open(`/customDetail?val=${codeVal}`, '_blank');
      // this.props.history.push('/customDetail?tab=2');
    }, 1000);
  };

  handleOkUse() {

  }

  handleCancel() {
    this.setState({ visible: false });
  };

  handleCancelUse() {
    this.setState({ visibleUse: false });
  }

  getTemValue(e) {
    this.setState({
      temNameValue: e.target.value
    });
  };

  render() {
    const { visible, visibleUse, loading } = this.state;
    return (
      <div className="customService">
        <Modal
          width="500px"
          wrapClassName="customModal"
          visible={visibleUse}
          title="  "
          centered={false}
          onOk={this.handleOkUse}
          onCancel={this.handleCancelUse}
          footer={[
            <Button key="submit" type="primary" className="submitOk" loading={loading} onClick={this.handleOkUse}>确定</Button>,
            <Button key="back" className="backOk" onClick={this.handleCancelUse}>取消</Button>,
          ]}
        >
          <div className="flex flex-align-baseline">
            <p style={{width: '100px', margin: 0}}>模版名称：</p>
            <Input size="large" placeholder="" onChange={this.getTemValue} />
          </div>
          <div className="flex flex-align-baseline" style={{margin: '30px 0'}}>
            <p style={{width: '100px', margin: 0}}>负责人：</p>
            <Select defaultValue="lucy" style={{width: '100%'}} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="flex flex-align-baseline">
            <p style={{width: '100px', margin: 0}}>关联公司：</p>
            <Select defaultValue="lucy" style={{width: '100%'}} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </Modal>

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