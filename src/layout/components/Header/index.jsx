/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-05 10:30:01
 */
import { Layout } from 'antd'
import { setCollapsed } from '@/store/modules/app';
import { useDispatch } from 'react-redux'
import AvatarIcon from './components/AvatarIcon'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import './index.less'

function LayoutHeader({ collapsed }) {
    const dispatch = useDispatch()
    const { Header } = Layout
    return (<Header>
        <div className="header-lf">
            <div
                className="collapsed"
                onClick={() => {
                    dispatch(setCollapsed(!collapsed));
                }}
            >
                {collapsed ? <MenuUnfoldOutlined id="isCollapse" /> : <MenuFoldOutlined id="isCollapse" />}
            </div>
        </div>
        <div className="header-ri">
            <AvatarIcon />
        </div>
    </Header>);
}

export default LayoutHeader;