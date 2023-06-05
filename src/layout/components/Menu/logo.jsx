/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-05 11:32:08
 */
import logoSvg from "@/assets/img/logo.svg";
import { useSelector } from 'react-redux';

function Logo({ collapsed }) {
    const appName = useSelector(state => state.app.appName)
    return (
        <div className="logo-box">
            <img className="logo-img" src={logoSvg} alt="" />
            {
                !collapsed && <div className='logo-text'>{appName}</div>
            }
        </div>
    );
}

export default Logo;