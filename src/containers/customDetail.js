/*
 customDetail
 */

import React, { Component } from 'react';
import { Layout, Input, Button, message } from 'antd';
import '../styles/customDetail.less';
import { createNodes, queryNodes, createEvents } from '../actions/customDetail-actions';
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
      eventArr: [{
        num: '一',
        val: '',
      }],
      createEventsData: {
        events: [],
        nodeId: '',
        templateId: this.getAge('id'),
      },
      nameRequired: true,
      isFetching: true,
    };
    this.addEventNode = this.addEventNode.bind(this);
    this.createNodeList = this.createNodeList.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.nextEventNodes = this.nextEventNodes.bind(this);
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
    if(this.props.nodeData.nodes.length > 0) {
      this.nextEventNodes();
      return true;
    }
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

  nextEventNodes() {
    const temId = this.state.createArrData.templateId;
    let _id;
    for(let v of this.props.nodeData.nodes) {
      if(v.finish === null) {
        _id = v.id;
        break;
      }
    }
    let obj = Object.assign({}, this.state.createEventsData, {
      events: JSON.stringify(
        this.state.eventArr.map((todo) => {
          return {
            events: todo.val
          }
        })
      ),
      nodeId: _id,
    });
    this.props.createEvents(obj);
    this.props.queryNodes({
      templateId: temId
    });
  }

  nodeTotalNum(e, index) {
    let items = this.state.eventNode;
    items[index].name = e.target.value;
    this.setState({
      eventNode: items
    });
  }

  eventNodeTotalNum(e, index) {
    let items = this.state.eventArr;
    items[index].val = e.target.value;
    this.setState({
      eventArr: items
    });
  }

  addEvent() {
    let items = this.state.eventArr;
    let addNum = items.length + 1;
    items.push({
      num: this.simplifiedChinese(addNum),
      val: '',
    });
    this.setState({
      eventArr: items
    });
  }

  reduceEvent(index) {
    let items = this.state.eventArr;
    items.splice(index, 1);
    // items[index].val = '';
    items.forEach((num, sub)=>{
      items[sub].num = this.simplifiedChinese(sub + 1);
    });
    this.setState({
      eventArr: items
    });
  }

  render() {
    const eventNodeNum = this.state.eventNode;
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
                          <div key={num.id} style={{marginRight: '15px'}}>
                            <div className={`nodeLiDone ${num.finish === true || index === 0 ? 'doneStyle' : null}`} data-id={num.id}>
                              {num.name}
                            </div>
                            {this.props.nodeData.nodes.length > 1 && index + 1 < this.props.nodeData.nodes.length ? <img src={require('../assets/img/rightJd.png')} alt=""/> : ''}
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
                {!this.state.isFetching ?
                  <ul className="flex flex-col customDetail-sjMb0" style={{margin: '40px 45px 60px 45px'}}>
                    {this.state.eventArr.map((obj, index) =>
                      <li key={index} className="flex flex-align-center mb30">
                        <label>事件{obj.num}：</label>
                        <Input className="customDe-jdInput" size="large" placeholder="" value={this.state.eventArr[index].val} onChange={(e)=>this.eventNodeTotalNum(e, index)}/>
                        {this.state.eventArr.length === index + 1 ?
                          <img src={require('../assets/img/addJd2.png')} alt="" style={{cursor: 'pointer'}} onClick={this.addEvent}/> :
                          <img src={require('../assets/img/closeJd2.png')} alt="" style={{cursor: 'pointer'}} onClick={()=>this.reduceEvent(index)}/>
                        }
                      </li>
                    )}
                  </ul> : ''
                }
                <div style={{textAlign: 'center', marginTop: '60px'}}>
                  <Button className="submitOk" onClick={this.createNodeList}>
                    {this.props.nodeData.nodes.length > 1 ? '下一步' : '完成'}
                  </Button>
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
    createEvents: (res) => {
      dispatch(createEvents(res));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CustomDetail));