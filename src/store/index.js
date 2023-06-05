/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-02 11:10:08
 */
import { configureStore } from '@reduxjs/toolkit'

import appReducer from './modules/app/index'

export default configureStore({
    reducer: {
        app: appReducer
    }
})