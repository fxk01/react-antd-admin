/*
 login
 */

import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import '../styles/login.less';
import { Motion, spring, presets } from 'react-motion'
import { userLogin, removeLogin } from '../actions/login-actions';
import cookie from 'react-cookies';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      fontSize: 20,
      topPas: 0,
      fontSizePas: 20,
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.userLoginData.status === '200') {
      const realName = nextProps.userLoginData.user.realName;
      cookie.save('name', realName, { path: '/' });
      this.props.history.push('/record');
    }else if(nextProps.userLoginData.status === '500') {
      message.destroy();
      message.info(nextProps.userLoginData.message, 2.5, () => {
        this.props.removeLogin();
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err) {
        this.props.userLogin(values);
      }
    });
  };

  placeHandler(e, str) {
    let targetY = 0;
    let fontSize;
    let targetYPas = 0;
    let fontSizePas;
    if(str === 'text') {
      if(e.target.value.length > 0) {
        this.setState({
          top: -15,
          fontSize: 14,
        });
        return;
      }
      if(this.state.top === 0) {
        targetY = -15;
        fontSize = 14
      } else {
        targetY = 0;
        fontSize = 20
      }
      this.setState({
        top: targetY,
        fontSize,
      })
    }

    if(str === 'pas') {
      if(e.target.value.length > 0) {
        this.setState({
          topPas: -15,
          fontSizePas: 14,
        });
        return;
      }
      if(this.state.topPas === 0) {
        targetYPas = -15;
        fontSizePas = 14
      } else {
        targetYPas = 0;
        fontSizePas = 20
      }
      this.setState({
        topPas: targetYPas,
        fontSizePas,
      })
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="flex login">
        <main className="flex flex-justify-center flex-align-center login-centerW100">
          <div className="login-center">
            <h1 className="tlCen login-center-h1">积募服务管理平台</h1>

            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
              <FormItem style={{marginBottom: '55px'}}>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '账户不能为空!' }],
                })(
                  <Input onFocus={(e) => this.placeHandler(e, 'text')} onBlur={(e) => this.placeHandler(e, 'text')} type="text" placeholder="" />
                )}
                <Motion style={{y: spring(this.state.top, presets.wobbly)}}>
                  {interpolatingStyle => {
                    return (
                      <label style={{transform: `translateY(${interpolatingStyle.y}px)`, fontSize: `${this.state.fontSize}px`}} className='box'>账户</label>
                    )
                  }}
                </Motion>
              </FormItem>
              <FormItem style={{marginBottom: '70px'}}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '密码不能为空!' }],
                })(
                  <Input onFocus={(e) => this.placeHandler(e, 'pas')} onBlur={(e) => this.placeHandler(e, 'pas')} type="password" placeholder="" />
                )}
                <Motion style={{y: spring(this.state.topPas, presets.wobbly)}}>
                  {interpolatingStyle => {
                    return (
                      <label style={{transform: `translateY(${interpolatingStyle.y}px)`, fontSize: `${this.state.fontSizePas}px`}} className='box'>密码</label>
                    )
                  }}
                </Motion>
              </FormItem>
              <FormItem>
                <p className="mg0">
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                  </Button>
                </p>
                <div className="flex flex-justify-between">
                  <p className="flex">
                    <Link to="/about" className="login-form-forgot">注册</Link>
                  </p>
                  <p className="flex">
                    <Link to="/about" className="login-form-pas">忘记密码</Link>
                  </p>
                </div>
              </FormItem>
            </Form>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.loginReducerData
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin:(res) => {
      dispatch(userLogin(res))
    },
    removeLogin:(res) => {
      dispatch(removeLogin(res))
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form.create()(
  withRouter(Login)
));