/*
 customDetail
 */

import React, { Component } from 'react';
import { Layout, Input, Button, message } from 'antd';
import '../styles/customDetail.less';
import { createNodes, queryNodes } from '../actions/customDetail-actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import hoc from '../utils/hoc';
import Top from '../components/top/top';
import SiderLeft from '../components/siderLeft/siderLeft';
const { Content } = Layout;

@hoc
class CustomDetail extends Component {
  constructor() {
    super();
    this.state = {
      val: this.getAge('val'),
      defaultKeys: {
        sub: 'sub3',
        num: '11',
      },
      eventNode: [{
        key: 0,
        name: '',
      }],
      createArrData: {
        nodeList: [],
        templateId: this.getAge('id'),
      },
      nameRequired: true,
      isFetching: true,
    };
    this.addEventNode = this.addEventNode.bind(this);
    this.createNodeList = this.createNodeList.bind(this);
  }

  componentDidMount() {
    const id = this.state.createArrData.templateId;
    this.props.queryNodes({
      templateId: id
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.nodeData.status === '200') {
      this.setState({
        isFetching: false
      })
    }
    if(nextProps.queryNodeData.nodes.length > 0) {
      this.setState({
        isFetching: false
      })
    }
  }

  addEventNode() {
    let lastNumLeg = this.state.eventNode.length - 1;
    let mapNum = this.state.eventNode[lastNumLeg].key + 1;
    this.state.eventNode.push({key: mapNum});
    this.setState({
      eventNode: this.state.eventNode
    });
  }

  closeInput(index) {
    if(this.state.eventNode.length === 1) {
      return;
    } else {
      this.state.eventNode.splice(index, 1);
      this.setState({
        eventNode: this.state.eventNode
      });
    }
  }

  createNodeList() {
    this.state.createArrData.nodeList.splice(0, this.state.createArrData.nodeList.length);
    this.state.eventNode.forEach((obj) => {
      this.state.createArrData.nodeList.push({name: obj['name'] || ''});
    });
    this.setState({
      createArrData: this.state.createArrData
    });
    const option = {name: ''};
    if(JSON.stringify(this.state.createArrData.nodeList).indexOf(JSON.stringify(option)) !== -1) {
      message.destroy();
      message.info('模版节点不能为空！', 2.5);
    } else {
      this.props.createNodes({
        nodes: JSON.stringify(this.state.createArrData.nodeList),
        templateId: this.getAge('id')
      });
    }
  }

  nodeTotalNum(e, index) {
    this.state.eventNode[index]['name'] = e.target.value;
    this.setState({
      eventNode: this.state.eventNode
    });
  }

  render() {
    const eventNodeNum = this.state.eventNode;
    const { queryNodeData } = this.props;
    return (
      <div className="customDetail">
        <Layout>
          <Top />
          <Layout>
            <SiderLeft defaultKeys={this.state.defaultKeys} />
            <Layout style={{padding: '30px 40px 104px 40px'}}>

              <Content className="record-content" style={{marginTop: '0', paddingBottom: '100px'}}>
                <div className="flex flex-justify-between" style={{marginTop: '20px'}}>
                  <p className="record-searchText">{decodeURIComponent(this.state.val)}</p>
                </div>
                <div className="flex flex-align-center flex-justify-between customD-jd">
                  {this.state.isFetching ?
                    <ul className="flex flex-wrap mg0">
                      {eventNodeNum.map((num, index) =>
                        <li key={num.key}>
                          <img className="closeJd" src={require('../assets/img/closeJd.png')} alt="" onClick={()=>this.closeInput(index)}/>
                          <Input placeholder="" onChange={(e)=>this.nodeTotalNum(e, index)} />
                          {eventNodeNum.length > 1 && index + 1 < eventNodeNum.length ? <img src={require('../assets/img/rightJd.png')} alt=""/> : ''}
                        </li>
                      )}
                    </ul> : ''
                  }
                  <ul className="flex flex-wrap mg0">
                    {this.props.nodeData.nodes !== undefined &&
                      <li className="flex">
                        {this.props.nodeData.nodes.map((num, index) =>
                          <div key={num.id} className="nodeLiDone">
                            {num.name}
                          </div>
                        )}
                      </li>
                    }
                  </ul>
                  {this.state.isFetching ?
                    <div style={{cursor: 'pointer'}} onClick={this.addEventNode}>
                      <img src={require('../assets/img/addJd.png')} alt="" />
                    </div> : ''
                  }
                </div>
                <ul className="flex flex-col customDetail-sjMb0" style={{margin: '40px 45px 60px 45px', display: 'none'}}>
                  <li className="flex flex-align-center mb30">
                    <label>事件一：</label>
                    <Input className="customDe-jdInput" size="large" placeholder="" />
                    <img src={require('../assets/img/closeJd2.png')} style={{cursor: 'pointer'}} />
                  </li>
                  <li className="flex flex-align-center mb30">
                    <label>事件二：</label>
                    <Input className="customDe-jdInput" size="large" placeholder="" />
                    <img src={require('../assets/img/addJd2.png')} style={{cursor: 'pointer'}} />
                  </li>
                </ul>
                <div style={{textAlign: 'center', marginTop: '60px'}}>
                  <Button className="submitOk" onClick={this.createNodeList}>完成</Button>
                  <Button className="submitOk customDetail-cancel">取消</Button>
                </div>
              </Content>

            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.customDetailReducerData
};
const mapDispatchToProps = (dispatch) => {
  return {
    createNodes: (res) => {
      dispatch(createNodes(res))
    },
    queryNodes: (res) => {
      dispatch(queryNodes(res));
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CustomDetail));