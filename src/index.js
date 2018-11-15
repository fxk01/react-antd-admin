/*
 index
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import './index.css';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import {
  About,
  RegisterRecord,
  YearService,
  CustomService,
  CustomDetail,
  Login
} from './routes/routes';
import List from './containers/list';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store';

export default class Index extends Component {
  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Provider store={store}>
          <Router>
            <div style={{height: '100%'}}>
              <Route exact path="/" component={Login} />
              <Route path="/about" component={About} />
              <Route path="/list" component={List} />
              <Route path="/record" component={RegisterRecord} />
              <Route path="/yearService" component={YearService} />
              <Route path="/customService" component={CustomService} />
              <Route path="/customDetail" component={CustomDetail} />
            </div>
          </Router>
        </Provider>
      </LocaleProvider>

    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
serviceWorker.unregister();