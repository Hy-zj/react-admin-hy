/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-04 22:52:59
 */
import { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import { useDispatch } from 'react-redux';
import { setToken, setUserInfo } from '@/store/modules/app'
import { useNavigate } from 'react-router-dom'
import { HOME_URL } from '@/config'
import api from '@/api'

function LoginForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = async (loginForm) => {
        try {
            setLoading(true);
            const { msgCode, data } = await api.login(loginForm);

            if (msgCode === 200) {

                dispatch(setToken(data?.token))
                dispatch(setUserInfo(data?.user))
                message.success('登陆成功！')
                navigate(HOME_URL)
            }
        } finally {
            setLoading(false);
        }
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    return (
        <Form form={form} name="login" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} size="large" autoComplete="off">
            <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
                <Input placeholder="用户名：admin" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                <Input.Password autoComplete="new-password" placeholder="密码：123456" />
            </Form.Item>
            <Form.Item className="login-btn">
                <Button type="primary" style={{ width: '100%' }} htmlType="submit" loading={loading}>
                    登录
                </Button>
            </Form.Item>
        </Form>);
}

export default LoginForm;