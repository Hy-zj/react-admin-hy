/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-05 13:42:40
 */
import { Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import * as Icons from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom'
import './index.less'
import Logo from './logo'
import api from '@/api'


function LayoutMenu({ collapsed }) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [selectedKeys, setSelectedKeys] = useState([pathname]);
    const [openKeys, setOpenKeys] = useState([]);
    // 获取菜单列表并处理成 antd menu 需要的格式
    const [menuList, setMenuList] = useState([]);
    const getMenuData = async () => {
        try {
            const { data } = await api.getMenus();
            if (!data) return;
            setMenuList(deepLoop(data.list));
        } finally {
        }
    };

    const customIcons = Icons;
    const addIcon = (name) => {
        if (name) {
            return React.createElement(customIcons[name]);
        }
    };
    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const deepLoop = (menuList = [], newArr = []) => {
        menuList.forEach((item) => {
            if (!item?.children?.length) return newArr.push(getItem(item.title, item.path, addIcon(item?.icon)));
            newArr.push(getItem(item.title, item.path, addIcon(item?.icon), deepLoop(item.children)));
        });
        return newArr
    }

    const getOpenKeys = (path) => {
        let newStr = '';
        let newArr = [];
        let arr = path.split('/').map((i) => '/' + i);
        for (let i = 1; i < arr.length - 1; i++) {
            newStr += arr[i];
            newArr.push(newStr);
        }
        return newArr;
    };

    // 设置当前展开的 subMenu
    const onOpenChange = (openKeys) => {
        setOpenKeys(openKeys);
    };
    // 点击当前菜单跳转页面

    const clickMenu = ({ key }) => {
        navigate(key);
    };
    useEffect(() => {
        setOpenKeys(['/dashboard']);
        getMenuData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // 刷新页面菜单保持高亮
    useEffect(() => {
        setSelectedKeys([pathname]);
        setOpenKeys(getOpenKeys(pathname))
    }, [pathname]);

    return (<div className='menu'>
        <div className="logo-box">
            <Logo collapsed={collapsed} />
        </div>
        <Menu theme="dark" mode="inline"
            openKeys={openKeys}
            defaultSelectedKeys={selectedKeys}
            items={menuList}
            onClick={clickMenu}
            onOpenChange={onOpenChange}
        />
    </div>);
}

export default LayoutMenu;