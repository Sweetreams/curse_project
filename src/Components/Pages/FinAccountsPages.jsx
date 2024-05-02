import { Breadcrumb, theme, Table, Space, Typography, Button} from 'antd';
import React from 'react'
import { columns, dataSourceAccount } from '../../data';

const finAccountsPages = () => {
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
                <Space align='center' style={{marginBottom: 40, gap:30}}>
                    <Typography.Title level={2}>Счета</Typography.Title>
                    <Button type='primary'>Добавить поле</Button>
                </Space>
                
                <Table dataSource={dataSourceAccount} columns={columns}></Table>
            </div>
        </>
    )
}

export default finAccountsPages