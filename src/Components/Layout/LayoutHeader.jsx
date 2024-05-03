import { Flex, Layout, Typography, theme } from 'antd'
import React from 'react'

const LayoutHeader = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout.Header style={{ paddingRight: 25, background: colorBgContainer, display: 'flex', justifyContent: 'end', alignItems: 'center',  }}>
            <img width={25} src="/src/assets/profile-svgrepo-com.svg" alt="safsa" />
            <Typography.Text>Администратор</Typography.Text>
        </Layout.Header>
    )
}

export default LayoutHeader