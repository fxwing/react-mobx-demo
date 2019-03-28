import React, { Component } from 'react'
import styles from './Login.less'
import { observer, inject } from 'mobx-react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;
const form = Form.create();
@inject('loginStore')
@inject('asideStore')

@form @observer class Login extends Component {
    constructor(props) {
        super();
        console.log(props);
    }
    handleSubmit(e) {
        const { login, userInfo,changeTest } = this.props.loginStore;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                login(values);
                changeTest()
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { testData}=this.props.loginStore
        return (
            <div className={styles.loginWrapper}  >
                <Form onSubmit={(event) => this.handleSubmit(event)} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住我</Checkbox>
                        )}
                        <a className="login-form-forgot" href="">忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登陆
                        </Button>
                        {testData}
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Login