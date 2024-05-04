import { Breadcrumb, Button, Card, Col, Flex, Row, Space, Typography, theme } from 'antd'
import React from 'react'

const FinOrderPages = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Управление финансами</Breadcrumb.Item>
                <Breadcrumb.Item>Заказы</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
                <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
                    <Typography.Title level={2}>Заказы</Typography.Title>
                    <Button type='primary'>Добавить поле</Button>
                </Space>
                <div style={{ padding: 24, marginBottom: 40, background: '#f0f0f0', borderRadius: borderRadiusLG }}>
                    <Typography.Text>Возможности системы управления финансов для их учёта.<br /></Typography.Text>
                    <Typography.Text> <strong>— Заказы:</strong> возможноность создавать заказы, привязанные к Клиенту.<br /></Typography.Text>
                    <Typography.Text> <strong>— Счета:</strong> Счета доступные для Заказчиков<br /></Typography.Text>
                    <Typography.Text> <strong>— Оплаты:</strong> простая форма учета оплат. <br /></Typography.Text>
                </div>
                <Row gutter={10}>
                    <Col flex='auto'>
                        <Card size="small" title="Открыт">
                            <p style={{marginBottom: 9, fontSize: 14}}><strong>#6</strong></p>
                            <p style={{marginBottom: 5, fontSize: 13}}>Петров [Solsbury HILL] 880000004</p>
                            <p style={{marginBottom: 5, fontSize: 13, background: '#FFE4C4', paddingLeft: 7, paddingTop: 5, paddingBottom: 5, color: '#FFA500'}}>Открыт</p>
                            <p style={{marginBottom: 5, color: 'gray', fontSize: 13}}>Сумма заказа</p>
                            <p style={{marginBottom: 5, fontSize: 13}}><strong>1 863 850,00 р.(долг)</strong></p>
                            <Button>Открыть</Button>
                        </Card>
                        <Card size="small" title="Открыт">
                            <p style={{marginBottom: 9, fontSize: 14}}><strong>#9</strong></p>
                            <p style={{marginBottom: 5, fontSize: 13}}>Распутин [SMYTA] 880000008</p>
                            <p style={{marginBottom: 5, fontSize: 13, background: '#FFE4C4', paddingLeft: 7, paddingTop: 5, paddingBottom: 5, color: '#FFA500'}}>Открыт</p>
                            <p style={{marginBottom: 5, color: 'gray', fontSize: 13}}>Сумма заказа</p>
                            <p style={{marginBottom: 5, fontSize: 13}}><strong>12 350,00 р.(долг)</strong></p>
                            <Button>Открыть</Button>
                        </Card>
                    </Col>
                    <Col flex='auto'>
                        <Card size="small" title="Обработан">
                            <p style={{marginBottom: 9, fontSize: 14}}><strong>#5</strong></p>
                            <p style={{marginBottom: 5, fontSize: 13}}>Петров [Solsbury HILL] 880000003</p>
                            <p style={{marginBottom: 5, fontSize: 13, background: '#F0FFF0', paddingLeft: 7, paddingTop: 5, paddingBottom: 5, color: '#008000'}}>Обработан</p>
                            <p style={{marginBottom: 5, color: 'gray', fontSize: 13}}>Сумма заказа</p>
                            <p style={{marginBottom: 5, fontSize: 13}}><strong>186 850,00 р.(долг)</strong></p>
                            <Button>Открыть</Button>
                        </Card>
                    </Col>
                    <Col flex='auto'>
                        <Card size="small" title="Все отгружено">
                            <p style={{marginBottom: 9, fontSize: 14}}><strong>#1</strong></p>
                            <p style={{marginBottom: 5, fontSize: 13}}>Августин Петров [NMP] 880000004</p>
                            <p style={{marginBottom: 5, fontSize: 13, background: '#F0F8FF', paddingLeft: 7, paddingTop: 5, paddingBottom: 5, color: '#4169E1'}}>Все огружено</p>
                            <p style={{marginBottom: 5, color: 'gray', fontSize: 13}}>Сумма заказа</p>
                            <p style={{marginBottom: 5, fontSize: 13}}><strong>1 342 890,00 р.(долг)</strong></p>
                            <Button>Открыть</Button>
                        </Card>
                    </Col>
                    <Col flex='auto'>
                        <Card style={{marginBottom: 10}} size="small" title="Выполнен">
                            <p style={{marginBottom: 9, fontSize: 14}}><strong>#2</strong></p>
                            <p style={{marginBottom: 5, fontSize: 13}}>ООО Зевс [ASDD] 880000004</p>
                            <p style={{marginBottom: 5, fontSize: 13, background: '#9ACD32', paddingLeft: 7, paddingTop: 5, paddingBottom: 5, color: '#333333'}}>Выполнен</p>
                            <p style={{marginBottom: 5, color: 'gray', fontSize: 13}}>Сумма заказа</p>
                            <p style={{marginBottom: 5, fontSize: 13}}><strong>127 960,00 р.(долг)</strong></p>
                            <Button>Открыть</Button>
                        </Card>
                        <Card style={{marginBottom: 10}} size="small" title="Выполнен">
                            <p style={{marginBottom: 9, fontSize: 14}}><strong>#10</strong></p>
                            <p style={{marginBottom: 5, fontSize: 13}}>ООО Кутузов [HILL] 880000004</p>
                            <p style={{marginBottom: 5, fontSize: 13, background: '#9ACD32', paddingLeft: 7, paddingTop: 5, paddingBottom: 5, color: '#333333'}}>Выполнен</p>
                            <p style={{marginBottom: 5, color: 'gray', fontSize: 13}}>Сумма заказа</p>
                            <p style={{marginBottom: 5, fontSize: 13}}><strong>38 590,00 р.(долг)</strong></p>
                            <Button>Открыть</Button>
                        </Card>
                    </Col>
                    <Col flex='auto'>
                        <Card size="small" title="Аннулирован">
                            <p style={{marginBottom: 9, fontSize: 14}}><strong>#4</strong></p>
                            <p style={{marginBottom: 5, fontSize: 13}}>ООО Игропом [MIC] 386500004</p>
                            <p style={{marginBottom: 5, fontSize: 13, paddingLeft: 7, paddingTop: 5, paddingBottom: 5}}>Открыть</p>
                            <p style={{marginBottom: 5, color: 'gray', fontSize: 13}}>Сумма заказа</p>
                            <p style={{marginBottom: 5, fontSize: 13}}><strong>39 234,00 р.(долг)</strong></p>
                            <Button>Открыть</Button>
                        </Card>
                    </Col>
                </Row>

            </div>
        </>
    )
}

export default FinOrderPages