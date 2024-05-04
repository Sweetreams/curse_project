import { Breadcrumb, theme, Table, Space, Typography, Button, Modal, Form, Input, Checkbox, DatePicker} from 'antd';
import React, { useState } from 'react'
import { columnsAccount, dataSourceAccount } from '../../data';

const finAccountsPages = () => {
    const [open, setOpen] = useState(false)
    const [form] = Form.useForm()

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span:16,
        },

    }

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const openModalMenu = () => {
        setOpen(true)
        // dataSourceAccount.push(
        //     {
        //         'key': (dataSourceAccount.length + 1).toString(),
        //         'id': (dataSourceAccount.length + 1).toString(),
        //         'account': 4,
        //         'buyer': 'wfsdfds',
        //         'date': '324234',
        //         'invamount': 123233,
        //         'order': 'ewfew',
        //         'shipped': '-'

        //     }
        // )
    }
    
    const handleOk = (values) => {
        dataSourceAccount.push(
            {
                'key': (dataSourceAccount.length + 1).toString(),
                'id': (dataSourceAccount.length + 1).toString(),
                'account': 4,
                'buyer': 'Михаил',
                'date': '11.12.2024',
                'invamount': 120000,
                'order': 'Заказ №23',
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
                <Space align='center' style={{marginBottom: 40, gap:30}}>
                    <Typography.Title level={2}>Счета</Typography.Title>
                    <Button type='primary' onClick={openModalMenu}>Добавить поле</Button>
                </Space>
                
                <Table dataSource={dataSourceAccount} columns={columnsAccount}></Table>
            </div>
            <Modal title='Оформление нового счёта' open={open} onOk={handleOk} onCancel={handleCancel}>
                <Form {...layout} form={form} name='control-hooks' onFinish={handleOk}>
                    <Form.Item name="data" label="Дата">
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item name="chet" label="Номер счёта">
                        <Input/>
                    </Form.Item>
                    <Form.Item name="zakaz" label="Номер счёта">
                        <Input/>
                    </Form.Item>
                    <Form.Item name="pokyp" label="Покупатель">
                        <Input/>
                    </Form.Item>
                    <Form.Item name="symma" label="Сумма">
                        <Input/>
                    </Form.Item>
                    <Form.Item name="otgruz" label="Отгружен">
                        <Checkbox/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default finAccountsPages