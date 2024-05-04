import { Layout, Menu } from 'antd';
import React from 'react'
import { items } from '../../data'
import imgLogo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

const LayoutSider = () => {
    return (
        <Layout.Sider >
            <div className="demo-logo-vertical" style={{display: 'flex', justifyContent:'center', paddingTop: 10}}>
                <Link to='/mainpage'><img src={imgLogo} alt="sad" /></Link>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Layout.Sider>
    )
}

export default LayoutSider