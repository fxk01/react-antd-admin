/*
 top组件
 */

import React, { Component } from 'react';
import { Layout, Input } from 'antd';
import './top.less';
import cookie from 'react-cookies'
import ld from '../../assets/svg/ld.svg';
import setting from '../../assets/svg/setting.svg';

const { Header } = Layout;
const Search = Input.Search;

class Top extends Component {
  render() {
    return (
      <div className="top">
        <Header className="header flex flex-justify-between">
          <div className="hea-title">积募服务管理平台</div>

          <ul className="flex flex-align-center hea-ul">
            <li>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 300 }}
              />
            </li>
            <li className="flex flex-align-center">
              <img src={ld} className="block" alt="ld" />
            </li>
            <li className="flex flex-align-center">
              <img src={setting} className="block" alt="setting" />
            </li>
            <li className="flex flex-align-center">
              {cookie.load('name')}
            </li>
            <li className="flex flex-align-center">
              <img src={require('../../assets/img/jm.png')} className="block" alt="setting" />
            </li>
          </ul>
        </Header>
      </div>
    );
  }
}

export default Top;