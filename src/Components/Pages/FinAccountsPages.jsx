import { Breadcrumb, theme, Table, Space, Typography, Button, Modal, Form, Input, Checkbox, DatePicker } from 'antd';
import React, { useState } from 'react'
import { columnsAccount, dataSourceAccount} from '../../data';

const finAccountsPages = () => {
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

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const openModalMenu = () => {
        setOpen(true)
    }

    const onFinish = (values) => {
        dataSourceAccount.push(
            {
                'key': (dataSourceAccount.length + 1).toString(),
                'id': (dataSourceAccount.length + 1).toString(),
                'account': values.chet,
                'buyer': values.pokyp,
                'date': values.data.$D + '.' + values.data.$M + '.' + values.data.$y,
                'invamount': values.symma,
                'order': 'Заказ №' + values.zakaz,
                'shipped': '✓'

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
                <Breadcrumb.Item>Счета</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
                <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
                    <Typography.Title level={2}>Счета</Typography.Title>
                    <Button type='primary' onClick={openModalMenu}>Добавить поле</Button>
                </Space>
                <div style={{ padding: 24, marginBottom: 40, background: '#f0f0f0', borderRadius: borderRadiusLG }}>
                    <Typography.Text>Счета содержат в себе информацию о финансовых операциях компании. Они включают в себя следующие данные:<br /></Typography.Text>
                    <Typography.Text> <strong>— ID</strong> — уникальный идентификатор счета.<br /></Typography.Text>
                    <Typography.Text> <strong>— Дата</strong> — дата выставления счета.<br /></Typography.Text>
                    <Typography.Text> <strong>— Номер счёта</strong> — номер счета, присвоенный в системе.<br /></Typography.Text>
                    <Typography.Text> <strong>— Номер заказа</strong> — номер заказа, связанного со счетом. <br /></Typography.Text>
                    <Typography.Text> <strong>— Покупатель</strong> — наименование покупателя по счету. <br /></Typography.Text>
                    <Typography.Text> <strong>— Сумма счёта</strong> — сумма счета. <br /></Typography.Text>
                    <Typography.Text> <strong>— Отгружен</strong> — статус отгрузки товара по счету. <br /></Typography.Text>
                </div>
                <Table dataSource={dataSourceAccount} columns={columnsAccount}></Table>
            </div>
            <Modal title='Оформление нового счёта' open={open} onCancel={handleCancel} footer={false}>
                <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
                    <Form.Item name="data" label="Дата" rules={[{ required: true }]}>
                        <DatePicker placeholder='Выбор даты' />
                    </Form.Item>
                    <Form.Item name="chet" label="Номер счёта" rules={[{ required: true }]}>
                        <Input placeholder='Номер счёта' />
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
                    <Form.Item name="otgruz" label="Отгружен">
                        <Checkbox />
                    </Form.Item>
                    <Form.Item style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button type='primary' htmlType='submit'>Добавить</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default finAccountsPages