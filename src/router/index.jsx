/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-05 14:08:21
 */
import { Navigate, useRoutes } from 'react-router-dom'
import Login from '@/views/login'
import User from '@/views/user'
import Dashboard from '@/views/dashboard'
import NotFound from '@/views/404'
import NotAuth from '@/views/403'
import Layout from '@/layout'

export const rootRouter = [{
    path: '/',
    element: <Navigate to="/login" />
},
{
    path: '/login',
    element: <Login />,
    meta: {
        requiresAuth: false,
        title: '登录页',
        key: 'login',
    }
},
{
    element: <Layout />,
    children: [
        {
            path: 'dashboard',
            element: <Dashboard />,
            meta: {
                title: '主页',
                requiresAuth: true
            }
        }
    ]
},
{
    element: <Layout />,
    children: [
        {
            path: 'user',
            element: <User />,
            meta: {
                title: '用户管理',
                requiresAuth: true
            }
        }
    ]
},
{
    path: '/404',
    element: <NotFound />,
    meta: {
        requiresAuth: false,
        title: '无此页面',
        key: '404',
    }
},
{
    path: '/403',
    element: <NotAuth />,
    meta: {
        requiresAuth: false,
        title: '无权限',
        key: '403',
    }
},
{
    path: '*',
    element: <Navigate to="/404" />
}]

const Router = () => {
    const routes = useRoutes(rootRouter)
    return routes
}

export default Router