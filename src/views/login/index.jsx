import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import logo from "@/assets/img/logo.svg";
import { Tabs } from 'antd';
import "./index.less";
import { useSelector } from 'react-redux';
import { useState } from 'react'
const Login = () => {
    const appName = useSelector(state => state.app.appName)
    const [activeIndex, setActiveIndex] = useState('1');
    const items = [
        {
            key: '1',
            label: `登录`,
            children: <LoginForm setActiveIndex={setActiveIndex} />,
        },
        {
            key: '2',
            label: `注册`,
            children: <RegisterForm setActiveIndex={setActiveIndex} />,
        }
    ];
    const onChange = (key) => {
        setActiveIndex(key)
    }
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-form">
                    <div className="login-logo">
                        <img className="login-icon" src={logo} alt="logo" />
                        <span className="logo-text">{appName}</span>
                    </div>
                    <Tabs activeKey={activeIndex} onChange={onChange} items={items} />
                </div>
            </div>
        </div>
    );
};

export default Login;
