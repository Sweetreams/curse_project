import { Breadcrumb, Button, Checkbox, DatePicker, Form, Input, Modal, Space, Table, Typography, theme } from 'antd';
import React, { useState } from 'react'
import { columnsPayments, dataSourcePayments } from '../../data';

const finPaymentsPages = () => {
    const [open, setOpen] = useState(false)
    const [form] = Form.useForm()

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const openModalMenu = () => {
        setOpen(true)
    }

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    }

    const handleOk = (values) => {
        dataSourcePayments.push(
            {
                'key': (dataSourcePayments.length + 1).toString(),
                'id': (dataSourcePayments.length + 1).toString(),
                'buyer': values.pokyp,
                'date': values.data.$D + '.' + values.data.$M + '.' + values.data.$y,
                'invamount': values.symma,
                'order': 'Заказ № ' + values.zakaz,
            }
        )
        setOpen(false)
    }

    const handleCancel = () => {
        setOpen(false)
    }

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Управление финансами</Breadcrumb.Item>
                <Breadcrumb.Item>Оплаты</Breadcrumb.Item>
            </Breadcrumb>

            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
                <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
                    <Typography.Title level={2}>Оплаты</Typography.Title>
                    <Button type='primary' onClick={openModalMenu}>Добавить поле</Button>
                </Space>
                <Table dataSource={dataSourcePayments} columns={columnsPayments}></Table>
            </div>

            <Modal title='Оформление нового счёта' open={open} onOk={handleOk} onCancel={handleCancel} footer={false}>
                <Form {...layout} form={form} name='control-hooks' onFinish={handleOk}>
                    <Form.Item name="data" label="Дата" rules={[{ required: true }]}>
                        <DatePicker placeholder='Выбор даты' />
                    </Form.Item>
                    <Form.Item name="zakaz" label="Номер заказа" rules={[{ required: true }]}>
                        <Input placeholder='Номер заказа' />
                    </Form.Item>
                    <Form.Item name="pokyp" label="Покупатель" rules={[{ required: true }]}>
                        <Input placeholder='Покупатель' />
                    </Form.Item>
                    <Form.Item name="symma" label="Сумма" rules={[{ required: true }]}>
                        <Input placeholder='Сумма счёта' />
                    </Form.Item>
                    <Form.Item style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button type='primary' htmlType='submit'>Добавить</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default finPaymentsPages