/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-05 14:13:19
 */
import { BrowserRouter } from 'react-router-dom';
import AuthRouter from '@/utils/authRouter';
import Router from '@/router'


function App() {
  return (
    <BrowserRouter>
      <AuthRouter>
        <Router />
      </AuthRouter>
    </BrowserRouter>
  );
}

export default App;
