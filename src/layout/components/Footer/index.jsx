/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-05 08:37:56
 */
import './index.less';
import { useSelector } from 'react-redux';

const LayoutFooter = () => {
    const appName = useSelector(state => state.app.appName)

    return (
        <div className="footer">
            <a href="http://www.spicyboy.cn/" target="_blank" rel="noreferrer">
                2023 © {appName}.
            </a>
        </div>
    );
};
export default LayoutFooter;
