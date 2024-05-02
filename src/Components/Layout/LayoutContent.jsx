import React from 'react'
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';

const LayoutContent = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout.Content style={{ margin: '0 16px' }}>
            <Outlet/>
        </Layout.Content>
    )
}

export default LayoutContent