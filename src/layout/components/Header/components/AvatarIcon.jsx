/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-05 14:08:51
 */
import { Dropdown, Avatar, message } from 'antd'
import avatar from "@/assets/img/avatar.png";
import { useRef } from 'react'
import { HOME_URL } from '@/config'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearMenus, clearToken, clearUserInfo } from '@/store/modules/app'
import InfoModal from './InfoModal'
import PasswordModal from './PasswordModal'

import api from '@/api'

function AvatarIcon() {
    const userInfo = useSelector(state => state.app.userInfo)
    const dispatch = useDispatch()
    const passRef = useRef(null);
    const infoRef = useRef(null);
    const navigate = useNavigate()
    const logout = async () => {
        const { msgCode } = await api.logout()
        if (msgCode === 200) {
            dispatch(clearMenus())
            dispatch(clearToken())
            dispatch(clearUserInfo())
            message.success('注销成功')
            navigate('/login')
        }
    }
    const items = [
        {
            key: "1",
            label: <span className="dropdown-item">首页</span>,
            onClick: () => navigate(HOME_URL)
        },
        {
            key: "2",
            label: <span className="dropdown-item">个人信息</span>,
            onClick: () => infoRef?.current?.showModal()
        },
        {
            key: "3",
            label: <span className="dropdown-item">修改密码</span>,
            onClick: () => passRef?.current?.showModal()
        },
        {
            type: "divider"
        },
        {
            key: "4",
            label: <span className="dropdown-item">退出登录</span>,
            onClick: logout
        }
    ]
    return (
        <>
            <span className="username">{userInfo?.username}</span>
            <Dropdown menu={{ items }} placement="bottom" arrow trigger={["click"]}>
                <Avatar size="large" src={avatar} />
            </Dropdown>
            <InfoModal innerRef={infoRef} />
            <PasswordModal innerRef={passRef} />
        </>
    );
}

export default AvatarIcon;