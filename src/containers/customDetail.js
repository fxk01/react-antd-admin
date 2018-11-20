/*
 customDetail
 */

import React, { Component } from 'react';
import { Layout, Input, Button } from 'antd';
import '../styles/customDetail.less';
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
        key: 0
      }],
    };
    this.addEventNode = this.addEventNode.bind(this);
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
                  <ul className="flex flex-wrap mg0">
                    {eventNodeNum.map((num, index) =>
                      <li key={num.key}>
                        <img className="closeJd" src={require('../assets/img/closeJd.png')} alt="" onClick={()=>this.closeInput(index)}/>
                        <Input placeholder="" />
                        {eventNodeNum.length > 1 && index + 1 < eventNodeNum.length ? <img src={require('../assets/img/rightJd.png')} /> : ''}
                      </li>
                    )}
                  </ul>
                  <div style={{cursor: 'pointer'}} onClick={this.addEventNode}>
                    <img src={require('../assets/img/addJd.png')} alt="" />
                  </div>
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
                  <Button className="submitOk">完成</Button>
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

export default CustomDetail;