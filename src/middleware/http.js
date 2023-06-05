/*
 * @Description: 封装请求拦截器
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-05 13:54:41
 */
import axios from 'axios'
import { BASE_URL, TIMEOUT } from '@/config/index'
import store from '@/store'
import { message } from 'antd'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true, // 跨域
})

// 请求拦截器
instance.interceptors.request.use(config => {
    const token = store.getState().app.token;
    token && (config.headers.Authorization = token);
    return config
}, err => {
    return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(response => {
    const { data } = response
    if (data?.msgCode && data?.msgCode !== 200) {
        message.error(data?.msg);
        return data
    }
    //还可以加一些其他状态码的处理逻辑
    return data
}, err => {
    return Promise.reject(err)
})
export default instance