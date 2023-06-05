/*
 * @Description: api集合
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-05 10:49:31
 */
import http from '@/middleware/http';

const api = {
    login(data) {
        return http.post('/api/login', data)
    },
    getMenus(data) {
        return http.post('/api/getMenus', data)
    },
    register(data) {
        return http.post('/api/register', data)
    },
    logout() {
        return http.post('/api/logout')
    },
}

export default api