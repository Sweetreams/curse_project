import { Breadcrumb, theme } from 'antd';
import React from 'react'

const finPaymentsPages = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Управление финансами</Breadcrumb.Item>
                <Breadcrumb.Item>Оплаты</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
                Payments
            </div>
        </>
    )
}

export default finPaymentsPages