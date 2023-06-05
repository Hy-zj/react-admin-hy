/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-05 08:04:02
 */
import { Layout } from 'antd'
import './index.less'
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom'
import { getCollapsed } from '@/store/modules/app'
import LayoutHeader from './components/Header'
import LayoutFooter from './components/Footer'
import LayoutMenu from './components/Menu'



function LayoutIndex() {
    const { Sider, Content } = Layout;
    const collapsed = useSelector(getCollapsed)
    const dispatch = useDispatch();
    return (
        <div className="container">
            <Sider trigger={null} collapsed={collapsed} width={220}>
                <LayoutMenu collapsed={collapsed} />
            </Sider>
            <Layout>
                <LayoutHeader collapsed={collapsed} />
                <Content>
                    <Outlet />
                </Content>
                <LayoutFooter />
            </Layout>
        </div>
    );
}

export default LayoutIndex;