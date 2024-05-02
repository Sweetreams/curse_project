import { Breadcrumb, Button, Card, Flex, Space, Typography, theme } from 'antd'
import React from 'react'

const FinOrderPages = () => {

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
                <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
                    <Typography.Title level={2}>Заказы</Typography.Title>
                    <Button type='primary'>Добавить поле</Button>
                </Space>
                <div style={{ padding: 24, marginBottom: 40 ,background: '#f0f0f0', borderRadius: borderRadiusLG }}>
                    <Typography.Text>Возможности системы управления финансов для их учёта.<br /></Typography.Text>
                    <Typography.Text> <strong>— Заказы:</strong> возможноность создавать заказы, привязанные к Клиенту.<br /></Typography.Text>
                    <Typography.Text> <strong>— Счета:</strong> Счета доступные для Заказчиков<br /></Typography.Text>
                    <Typography.Text> <strong>— Оплаты:</strong> простая форма учета оплат. <br /></Typography.Text>
                </div>
                <Space direction='horizontal' style={{ marginBottom: 40, gap: 30, justifyContent: 'space-between', display: 'flex' }}>
                    <Card size="small" title="Открыт">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card size="small" title="Обработан">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card size="small" title="Все отгружено">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card size="small" title="Выполнен">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                    <Card size="small" title="Аннулирован">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Space>

            </div>
        </>
    )
}

export default FinOrderPages