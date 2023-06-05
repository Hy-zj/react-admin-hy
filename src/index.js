/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-04 22:22:36
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/reset.css'
import 'antd/dist/reset.css';
import App from './App';
//模拟数据库数据
import '@/database/index'
import store from './store/index'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import '@/mock/index.js'


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
