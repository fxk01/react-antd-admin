/*
 siderLeft
 */

import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './siderLeft.less';
import { Link } from 'react-router-dom';
// import Setting from '../../assets/svg/setting.svg';

const { SubMenu } = Menu;
const { Sider } = Layout;

class SiderLeft extends Component {
  render() {
    return (
      <Sider className="siderLeft" width={200}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[this.props.defaultKeys.num]}
          defaultOpenKeys={[this.props.defaultKeys.sub]}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title={<span className="left-opacity-05"><Icon type="setting" theme="outlined" />首页</span>}>
            <Menu.Item key="1" className="left-opacity-05">option1</Menu.Item>
            <Menu.Item key="2" className="left-opacity-05">option2</Menu.Item>
            <Menu.Item key="3" className="left-opacity-05">option3</Menu.Item>
            <Menu.Item key="4" className="left-opacity-05">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span className="left-opacity-05"><Icon type="setting" theme="outlined" />数据分析</span>}>
            <Menu.Item key="5" className="left-opacity-05">option5</Menu.Item>
            <Menu.Item key="6" className="left-opacity-05">option6</Menu.Item>
            <Menu.Item key="7" className="left-opacity-05">option7</Menu.Item>
            <Menu.Item key="8" className="left-opacity-05">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span className="left-opacity-05"><Icon type="setting" theme="outlined" />服务</span>}>
            <Menu.Item key="9" className="left-opacity-05">
              <Link to="/record">登记备案</Link>
            </Menu.Item>
            <Menu.Item key="10" className="left-opacity-05">
              <Link to="/yearService">包年服务</Link>
            </Menu.Item>
            <Menu.Item key="11" className="left-opacity-05">
              <Link to="/customService">自定义服务</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span className="left-opacity-05"><Icon type="setting" theme="outlined" />管理</span>}>
            <Menu.Item key="12" className="left-opacity-05">option9</Menu.Item>
            <Menu.Item key="13" className="left-opacity-05">option10</Menu.Item>
            <Menu.Item key="14" className="left-opacity-05">option11</Menu.Item>
            <Menu.Item key="15" className="left-opacity-05">option12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" title={<span className="left-opacity-05"><Icon type="setting" theme="outlined" />设置</span>}>
            <Menu.Item key="16" className="left-opacity-05">option9</Menu.Item>
            <Menu.Item key="17" className="left-opacity-05">option10</Menu.Item>
            <Menu.Item key="18" className="left-opacity-05">option11</Menu.Item>
            <Menu.Item key="19" className="left-opacity-05">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default SiderLeft;