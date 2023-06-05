/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-04 23:01:03
 */
const devBaseUrl = '/'
const proBaseUrl = 'http:xxx//xxxx.xx.com'
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl : proBaseUrl
export const TIMEOUT = 5000
export const HOME_URL = '/dashboard'