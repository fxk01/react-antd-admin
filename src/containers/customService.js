/*
 customService
 */

import React, { Component } from 'react';
import { Layout, Modal, Button, Input, Select, message } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  queryTemplateByName,
  createTemplate,
  queryAlltemplate,
  queryAdminList,
  queryCustList,
} from '../actions/customService-actions';
import { logOut } from '../actions/about-actions';
import hoc from '../utils/hoc';
import '../styles/customService.less';
import Top from '../components/top/top';
import SiderLeft from '../components/siderLeft/siderLeft';
import CustomTem from '../components/customTem/customTem';

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function CustomList(props) {
  return (
    <ul className="custom-tem-listUl mg0">
      {props.data.map((todo, index) =>
        <li key={todo.id}>
          <div className="custom-temItems">
            {todo.name}
          </div>
          {props.data.length > 1 && index + 1 < props.data.length ? <img src={require('../assets/img/xy_jinatou.png')} alt="" style={{margin: '0 5px'}}/> : ''}
        </li>
      )}
    </ul>
  );
}

@hoc
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
        dataIndex: 'nodeList',
        render: (todo) => {
          let start, end;
          if(todo.length > 4) {
            let [...todoArr] = todo;
            start = todoArr.slice(0, 2);
            end = todoArr.slice(-2);
          }
          return (
            <ul className="custom-tem-listUl mg0">
              {todo.length < 5 ? (
                <CustomList data={todo}/>
              ) : <CustomList data={start.concat(end)}/>}
            </ul>
          )
        }
      }, {
        align: 'center',
        className: 'record-event-cs',
        title: '操作',
        dataIndex: 'operation',
        render: () => {
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
        title: '模版集合',
        // title: '登记备案模版',
      },
      titleText2: {
        mt: '40px',
        title: '包年服务模版',
      },
      loading: false,
      visible: false,
      visibleUse: false,
      temNameValue: '',
      ifTem: false,
      isFetching: false,
      loadingTable: true,
    };
    this.showModal = this.showModal.bind(this);
    this.showModalUse = this.showModalUse.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleOkUse = this.handleOkUse.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleCancelUse = this.handleCancelUse.bind(this);
    this.changePageSize = this.changePageSize.bind(this);
  }

  componentDidMount() {
    this.props.queryAdminList();
    this.props.queryCustList();
    this.props.queryAlltemplate({
      page: 1,
      pageSize: 10
    })
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.isFetching && nextProps.customServiceData.exist) {
      message.info('模版名称已存在', 2.5);
      this.setState({
        isFetching: false,
      });
    } else if(nextProps.createTemData.status === '200') {
      this.setState({
        loading: false,
        visible: false
      });
      let codeVal = encodeURIComponent(this.state.temNameValue);
      this.props.history.push(`/customDetail?val=${codeVal}&id=${nextProps.createTemData.templateId}`);
    }
    if(this.props.queryAllTemData.isFetching !== nextProps.queryAllTemData.isFetching) {
      this.setState({
        loadingTable: false,
      })
    }
  }

  componentWillUnmount() {
    this.props.logOut();
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
    if(this.state.temNameValue === '') {
      message.destroy();
      message.info('模版名称不能为空！', 2.5);
      return false;
    }
    if(this.props.customServiceData.exist) {
      message.destroy();
      message.info('模版名称已存在', 2.5);
    } else {
      this.setState({ loading: true });
      this.props.createTemplate({
        name: this.state.temNameValue
      })
    }
  };

  handleOkUse() {

  }

  handleCancel() {
    this.setState({ visible: false });
  };

  handleCancelUse() {
    this.setState({ visibleUse: false });
  }

  changePageSize(page) {
    this.setState({
      loadingTable: true,
    });
    this.props.queryAlltemplate({
      page: page.current,
      pageSize: 10
    });
  }

  getTemValue = this.debounce((e) => {
    this.props.queryTemplateByName({name: e.target.value});
    this.setState({
      temNameValue: e.target.value,
      isFetching: true,
    });
  });

  render() {
    const { visible, visibleUse, loading } = this.state;
    const { queryAdminData, queryCustListData } = this.props;
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
            <Select defaultValue={queryAdminData.admins.length > 0 ? queryAdminData.admins[0].name : ''} style={{width: '100%'}} onChange={handleChange}>
              {queryAdminData.admins.length > 0 && (
                queryAdminData.admins.map((todo, index) =>
                  <Option key={todo.id} value={todo.name}>{todo.name}</Option>
                )
              )}
            </Select>
          </div>
          <div className="flex flex-align-baseline">
            <p style={{width: '100px', margin: 0}}>关联公司：</p>
            <Select defaultValue={queryCustListData.custs.length > 0 ? queryCustListData.custs[0].name : ''} style={{width: '100%'}} onChange={handleChange}>
              {queryCustListData.custs.length > 0 && (
                queryCustListData.custs.map((todo, index) =>
                  <Option key={todo.id} value={todo.name}>{todo.name}</Option>
                )
              )}
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
            <label style={{width: '100px', margin: 0}}>模版名称：</label>
            <Input size="large" placeholder="" onChange={this.getTemValue} />
          </div>
        </Modal>
        <Layout>
          <Top />
          <Layout>
            <SiderLeft defaultKeys={this.state.defaultKeys} />
            <Layout style={{padding: '30px 40px 104px 40px'}}>
              <CustomTem
                showModal={this.showModal}
                changePageSize={this.changePageSize}
                titleText={this.state.titleText}
                columns={this.state.columns}
                loading={this.state.loadingTable}
                queryAllTemData={this.props.queryAllTemData}
              />

              {/*<CustomTem showModal={this.showModal} titleText={this.state.titleText2} columns={this.state.columns} data={data} />*/}
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.customServiceReducerData
};
const mapDispatchToProps = (dispatch) => {
  return {
    queryTemplateByName: (res) => {
      dispatch(queryTemplateByName(res))
    },
    createTemplate: (res) => {
      dispatch(createTemplate(res))
    },
    queryAlltemplate: (res) => {
      dispatch(queryAlltemplate(res))
    },
    queryAdminList: (res) => {
      dispatch(queryAdminList(res));
    },
    queryCustList: (res) => {
      dispatch(queryCustList(res))
    },
    logOut: (res) => {
      dispatch(logOut(res))
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CustomService));