import { Layout, Menu } from 'antd';
import React, { useState } from 'react'
import { items } from '../../data'

const LayoutSider = () => {
    return (
        <Layout.Sider >
            <div className="demo-logo-vertical" style={{display: 'flex', justifyContent:'center', paddingTop: 10}}>
                <img src="src/assets/logo.svg" alt="sad" />
                {/* СЮДА ИЗОБРАЖЕНИЕ БЛЯЯЯЯЯЯЯЯТЬ */}
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Layout.Sider>
    )
}

export default LayoutSider