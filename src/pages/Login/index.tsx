import LoginPageLayout from "./components/layout"
import { Input, Space, Button, Typography, message } from 'antd';
import '../../styles/login.css'
import { RootState } from "@/store";
import { useState } from 'react'
import { updateName } from "@/store/slices/userSlice";
import { history } from "@/.umi/core/history";
import { useDispatch, useSelector } from 'react-redux'

function LoginPage() {
    let [username, setUsername] = useState('');
    let [pwd, setPwd] = useState('');
    let dispatch = useDispatch();
    let state = useSelector((state: RootState) => state.user);
    const { Title } = Typography;
    function Login() {
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
    let content = (
        <div className="LoginContainer" style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'nowrap'
        }}>
            <Space direction="vertical">
                <Title level={2}>成都市大学生双创信息对接平台</Title>
                <Input 
                    placeholder="请输入用户名"
                    value={username}
                    onChange={(e) => setUsername(e.target.value.trim())}
                    onKeyPress={e => {
                        if (e.code === 'Enter') {
                            Login();
                        }
                    }}
                />
                <Input.Password
                    placeholder="请输入密码"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value.trim())}
                    onKeyPress={e => {
                        if (e.code === 'Enter') {
                            Login();
                        }
                    }}
                />
                <Button type="primary" onClick={Login}>登录</Button>
            </Space>
        </div>
    )
    return (
        <LoginPageLayout content={content}/>
    )
}

export default LoginPage