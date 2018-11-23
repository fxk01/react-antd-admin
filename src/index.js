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
  App,
  About,
  RegisterRecord,
  YearService,
  CustomService,
  CustomDetail,
  Login,
  UseTemplate
} from './routes/routes';
import List from './containers/list';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store';

export default class Index extends Component {
  render() {
    return (
      <LocaleProvider locale={zh_CN}>
        <Provider store={store}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/login" component={Login} />
              <Route path="/about" component={About} />
              <Route path="/list" component={List} />
              <Route path="/record" component={RegisterRecord} />
              <Route path="/yearService" component={YearService} />
              <Route path="/customService" component={CustomService} />
              <Route path="/customDetail" component={CustomDetail} />
              <Route path="/useTemplate" component={UseTemplate} />
              <Redirect to="/" />
            </Switch>
          </HashRouter>
        </Provider>
      </LocaleProvider>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
serviceWorker.unregister();