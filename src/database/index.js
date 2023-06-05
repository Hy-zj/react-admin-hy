//初始化数据
//用户
const userList = [{
    username: 'admin',
    password: '123456'
}]
localStorage.setItem('userList', JSON.stringify(userList));