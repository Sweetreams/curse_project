import { Flex, Layout, Typography, theme } from 'antd'
import React from 'react'

const LayoutHeader = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout.Header style={{ padding: 0, background: colorBgContainer }}>
            <Typography.Title level={5}>Администратор</Typography.Title>
        </Layout.Header>
    )
}

export default LayoutHeader