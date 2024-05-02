import { Breadcrumb, theme } from 'antd';
import React from 'react'

const finReportPAges = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
} = theme.useToken();

return (
    <>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
            Report
        </div>
    </>
)
}

export default finReportPAges