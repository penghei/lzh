import LoginPageLayout from "./components/layout"
import { Input, Space, Button, Typography, message, Form, Row } from 'antd';
import '../../styles/login.css'
import { RootState } from "@/store";
import { useState, Fragment } from 'react'
import { updateName } from "@/store/slices/userSlice";
import { history } from "@/.umi/core/history";
import { useDispatch, useSelector } from 'react-redux'

const FormItem = Form.Item;

function LoginPage() {
    let dispatch = useDispatch();
    let state = useSelector((state: RootState) => state.user);
    function Login(username, pwd) {
        if (username === '' || pwd === '') {
            message.error('请正确输入用户名和密码');
        } else {
            let target = state.userList.find(val => val.username === username);
            if (target && target.pwd === pwd) {
                dispatch(updateName(username));
                history.push('/admin');
            } else {
                message.error('用户名或密码错误');
            }
        }
    }
    function handleOk(val) {
        let username = val.username;
        let password = val.password;
        Login(username, password);
    }
    let content = (
        <div className="LoginContainer" style={{
            height: '100%',
            display: 'block'
        }}>
            <Fragment>
                <div style={{
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    margin: '-160px 0 0 -160px',
                    width: '320px',
                    height: '300px',
                    padding: '36px',
                    boxShadow: '0 0 160px rgba(0, 0, 0, 0.08)'
                }}>
                    <div className={"LoginLogo"}>
                        <span>成都市大学生双创信息对接平台</span>
                    </div>
                    <Form
                        onFinish={handleOk}
                        >
                        <FormItem name="username" 
                        rules={[{ required: true }]} hasFeedback>
                            <Input
                            placeholder={`请输入用户名`}
                            />
                        </FormItem>
                        <FormItem name="password"
                        rules={[{ required: true }]} hasFeedback>
                            <Input
                            type="password"
                            placeholder={`请输入密码`}
                            />
                        </FormItem>
                        <Row>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="Login-Btn"
                            >
                                Sign in
                            </Button>
                        </Row>
                    </Form>
                </div>
                <div className="LoginFooter">
                    GlimmerStudio @2021
                </div>
            </Fragment>
        </div>
    )
    return (
        <LoginPageLayout content={content}/>
    )
}

export default LoginPage