/*
 useTemplate
 */

import React, { Component } from 'react';
import { Layout } from 'antd';
import hoc from '../utils/hoc';
import {
  queryTemplateRefInfo
} from '../actions/useTemplate-actions';
import '../styles/registerRecord.less';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Top from '../components/top/top';
import SiderLeft from '../components/siderLeft/siderLeft';
import UseTem from '../components/useTem/useTem';

@hoc
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

  componentDidMount() {
    this.props.queryTemplateRefInfo({
      templateId: this.getAge('id')
    });
  }

  render() {
    return (
      <div className="registerRecord useTemplate">
        <Layout>
          <Top />
          <Layout>
            <SiderLeft defaultKeys={this.state.defaultKeys} />
            <Layout style={{padding: '30px 40px 104px 40px'}}>
              <UseTem
                name={this.getAge('name')}
                data={this.props.queryTemInstanceData}
              />
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.useTemplateReducerData
};
const mapDispatchToProps = (dispatch) => {
  return {
    queryTemplateRefInfo: (res) => {
      dispatch(queryTemplateRefInfo(res))
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(UseTemplate));