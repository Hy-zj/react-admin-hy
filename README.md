### 通用react后台
npx create-react-app xx 创建项目
ui组件库
pnpm add antd
index.js 加入
import 'antd/dist/reset.css';
在需要的地方
import {Button} from 'antd';
项目创建
style文件夹>>>> reset.css
内容如下
/**
 * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)
 * http://cssreset.com
 */
 
 html, body, div, span, applet, object, iframe,
 h1, h2, h3, h4, h5, h6, p, blockquote, pre,
 a, abbr, acronym, address, big, cite, code,
 del, dfn, em, img, ins, kbd, q, s, samp,
 small, strike, strong, sub, sup, tt, var,
 b, u, i, center,
 dl, dt, dd, ol, ul, li,
 fieldset, form, label, legend,
 table, caption, tbody, tfoot, thead, tr, th, td,
 article, aside, canvas, details, embed, 
 figure, figcaption, footer, header, hgroup, 
 menu, nav, output, ruby, section, summary,
 time, mark, audio, video{
   margin: 0;
   padding: 0;
   border: 0;
   font-size: 100%;
   font: inherit;
   font-weight: normal;
   vertical-align: baseline;
 }
 /* HTML5 display-role reset for older browsers */
 article, aside, details, figcaption, figure, 
 footer, header, hgroup, menu, nav, section{
   display: block;
 }
 ol, ul, li{
   list-style: none;
 }
 blockquote, q{
   quotes: none;
 }
 blockquote:before, blockquote:after,
 q:before, q:after{
   content: '';
   content: none;
 }
 table{
   border-collapse: collapse;
   border-spacing: 0;
 }

index.js 引入
import "./style/reset.css";

引入redux状态管理
pnpm install @reduxjs/toolkit react-redux

创建store/index.js

import { configureStore } from '@reduxjs/toolkit'


export default configureStore({
    reducer: {}
})

修改index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/reset.css'
import 'antd/dist/reset.css';
import './index.css';
import App from './App';
import store from './store/index'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

创建store/modules/app/index.js

/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-02 11:08:02
 */
import { createSlice } from '@reduxjs/toolkit'


export const appSlice = createSlice({
    name: 'app',
    initialState: {
        appName: '通用后台管理系统',
    },
    reducers: {
        changeAppName: (state, action) => {
            state.appName = action.payload
        }
    }
})

export const { changeAppName } = appSlice.actions

export default appSlice.reducer

将 Slice Reducers 添加到 Store 中
import { configureStore } from '@reduxjs/toolkit'

import appReducer from './modules/app/index'

export default configureStore({
    reducer: {
        app: appReducer
    }
})
在app.js中使用
/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-02 11:15:57
 */
import { useSelector, useDispatch } from 'react-redux'
import { changeAppName } from './store/modules/app/index'
import './App.css';

function App() {
  const appName = useSelector(state => state.app.appName)
  const dispatch = useDispatch();
  const handleAppName = () => {
    return dispatch(changeAppName('huangyue'))
  }
  return (
    <div className="App">
      {appName}
      <p>
        <button onClick={handleAppName}>修改项目标题</button>
      </p>
    </div>
  );
}

export default App;
使用@craco/craco做高级配置
创建
craco.config.js
内容如下
/* craco.config.js */
module.exports = {

};
修改package.json启动脚本
"start": "craco start",
"build": "craco build",
"test": "craco test",
支持less变量和@命名空间
pnpm add craco-less
创建variables.less文件
内容如下
@primary-color: #1DA57A;
craco.config.js内容如下
const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true
                    },
                }
            }
        }
 ]
};
app.js中测试
App.less
@import '@/style/variables.less';

.App {
    color: @primary-color;
}
界面已经发生变化
引入ahooks
npm install --save ahooks
使用mockjs模拟数据
npm install --save mockjs
创建mock> app.js