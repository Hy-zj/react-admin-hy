/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-05 11:34:52
 */
import { createSlice } from '@reduxjs/toolkit'


export const appSlice = createSlice({
    name: 'app',
    initialState: {
        appName: '后台管理系统',
        collapsed: false,
        token: localStorage.getItem('token') || '',
        userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
        menus: []
    },
    reducers: {
        changeAppName: (state, action) => {
            state.appName = action.payload
        },
        setCollapsed: (state, action) => {
            state.collapsed = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
            localStorage.setItem('token', action.payload)
        },
        clearToken: (state) => {
            state.token = ''
            localStorage.removeItem('token')
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        clearUserInfo: (state) => {
            state.userInfo = null
            localStorage.removeItem('userInfo')
        },
        setMenus: (state, action) => {
            state.menus = action.payload
        },
        clearMenus: (state) => {
            state.menus = []
            localStorage.removeItem('menus')
        },
    }
})
export const getCollapsed = (state) => state.app.collapsed;

export const {
    changeAppName,
    setCollapsed,
    setToken,
    setUserInfo,
    setMenus,
    clearToken,
    clearMenus,
    clearUserInfo
} = appSlice.actions

export default appSlice.reducer