import { Breadcrumb, Button, Form, Input, Modal, Space, Table, Typography, theme } from 'antd';
import React, { useState } from 'react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { columnsReport, dataSourceReport } from '../../data';

const finReportPAges = () => {
    const [open, setOpen] = useState(false)
    const [form] = Form.useForm()

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    }

    const openModalMenu = () => {
        setOpen(true)
    }

    const handleOk = (values) => {

    }

    const onFinish = (values) => {
        console.log(values)
        dataSourceReport.push(
            {
                'key': (dataSourceReport.length + 1).toString(),
                'id': (dataSourceReport.length + 1).toString(),
                'buyer': values.chet,
                'invamount': values.symma,
                'order': values.position,
            }
        )
        setOpen(false)
    }

    const handleCancel = () => {
        setOpen(false)
    }

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Управление финансами</Breadcrumb.Item>
                <Breadcrumb.Item>Отчёт по позициям</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
                <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
                    <Typography.Title level={2}>Отчёт по позициям</Typography.Title>
                    <Button type='primary' onClick={openModalMenu}>Добавить поле</Button>
                </Space>
                <div style={{ padding: 24, marginBottom: 40, background: '#f0f0f0', borderRadius: borderRadiusLG }}>
                    <Typography.Text>Отчёты по позициям предоставляют пользователям информацию о текущем состоянии запасов, их движении и использовании. Эти отчёты помогают в принятии обоснованных решений о закупках, контроле за остатками и оптимизации складских операций.<br /></Typography.Text>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: 40}}>
                    <BarChart data={dataSourceReport} width={1000} height={300}>
                        <XAxis dataKey='order' stroke='#8884d8' />
                        <YAxis />
                        <CartesianGrid stroke='#ccc' strokeDasharray="5 5" />
                        <Bar dataKey="invamount" fill='#8884d8' barSize={80} />
                    </BarChart>
                </div>
                <Table dataSource={dataSourceReport} columns={columnsReport}></Table>
            </div>
            <Modal title='Оформление нового счёта' open={open} onOk={handleOk} onCancel={handleCancel}>
                <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
                    <Form.Item name="position" label="Позиция" rules={[{ required: true }]}>
                        <Input placeholder='Позиция' />
                    </Form.Item>
                    <Form.Item name="chet" label="Номер счёта" rules={[{ required: true }]}>
                        <Input placeholder='Количество, шт' />
                    </Form.Item>
                    <Form.Item name="symma" label="Номер заказа" rules={[{ required: true }]}>
                        <Input placeholder='Сумма, р.' />
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>asfs</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default finReportPAges