/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-04 09:01:12
 */
import { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import api from '@/api/index'
function RegisterForm({ setActiveIndex }) {
  const onFinish = async (loginForm) => {
    try {
      setLoading(true);
      const { msgCode } = await api.register(loginForm);

      if (msgCode === 200) {
        form.resetFields();
        message.success('注册成功！')
        setActiveIndex('1')
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
    <Form form={form} name="register" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} size="large" autoComplete="off">
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password autoComplete="new-password" placeholder="请输入密码" />
      </Form.Item>
      <Form.Item className="login-btn">
        <Button type="primary" style={{ width: '100%' }} htmlType="submit" loading={loading}>
          注册
        </Button>
      </Form.Item>
    </Form>);
}

export default RegisterForm;