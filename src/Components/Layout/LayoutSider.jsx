import { Layout, Menu } from 'antd';
import React from 'react'
import { items } from '../../data'
import imgLogo from '../../assets/logo.svg'

const LayoutSider = () => {
    return (
        <Layout.Sider >
            <div className="demo-logo-vertical" style={{display: 'flex', justifyContent:'center', paddingTop: 10}}>
                <a href='/mainpage'><img src={imgLogo} alt="sad" /></a>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Layout.Sider>
    )
}

export default LayoutSider