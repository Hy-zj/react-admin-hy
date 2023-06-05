/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-05 14:06:37
 */
import Mock from 'mockjs';
import { generateToken } from '@/utils/index';
let userList = JSON.parse(localStorage.getItem('userList'));


Mock.mock("/api/login", (params) => {
    const body = JSON.parse(params.body)
    const { username, password } = body
    const findUser = userList.find(x => x.username === username)
    if (findUser && findUser.password === password) {
        return {
            msgCode: 200,
            msg: "登录成功",
            data: {
                user: findUser,
                token: generateToken()
            }
        }
    } else {
        return {
            msgCode: 500,
            msg: "用户名或密码错误",
            data: null
        }
    }

})
Mock.mock("/api/register", (params) => {
    const body = JSON.parse(params.body)
    const { username } = body
    const findUser = userList.find(x => x.username === username)
    if (findUser) {
        return {
            msgCode: 500,
            msg: "用户已存在，请勿重复注册",
            data: null
        }
    }
    userList = [...userList, { ...body }]
    localStorage.setItem('userList', userList)
    return {
        msgCode: 200,
        msg: "注册成功",
        data: null
    }
})


Mock.mock("/api/getMenus", (params) => {
    return {
        msgCode: 200,
        data: {
            list: [
                {
                    path: "/dashboard",
                    icon: "UserOutlined",
                    title: "首页",
                    children: [],
                    meta: {
                        title: "首页"
                    }
                },
                {
                    path: "/user",
                    icon: "UserOutlined",
                    title: "用户管理",
                    children: [],
                    meta: {
                        title: "用户管理"
                    }
                }
            ]
        },
        msg: "请求成功"
    }
})

Mock.mock("/api/logout", () => {
    return {
        msgCode: 200,
        msg: "退出成功",
        data: null
    }
})
