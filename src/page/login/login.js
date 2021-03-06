import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './login.css'
const FormItem = Form.Item


 class NormalLoginForm extends  Component{
  constructor(){
    super()
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="loginModel">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请填写用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请填写密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码！</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
          <div>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button> Or <a href="">注册</a>
          </div>

        </FormItem>
        <FormItem>
        </FormItem>
      </Form>
      </div>
      </div>
    );
  }
}
const Login= Form.create()(NormalLoginForm);
export default Login
