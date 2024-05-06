import { Breadcrumb, theme, Table, Space, Typography, Button, Modal, Form, Input, DatePicker, Select } from 'antd';
import React, { useState } from 'react'
import { columnsTecWare, dataSourceTecWare } from '../../data';
import { typeOperationTecWareVerif } from '../unitls';
import { DownloadOutlined } from '@ant-design/icons';

const TecWarehouse = () => {

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

  const toPrint = () => {
    print()
  }

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const openModalMenu = () => {
    setOpen(true)
  }

  const onFinish = (values) => {
    dataSourceTecWare.push(
      {
        'key': (dataSourceTecWare.length + 1).toString(),
        'id': (dataSourceTecWare.length + 1).toString(),
        'position': values.position,
        'date': values.date.$D + '.' + values.date.$M + '.' + values.date.$y,
        'typeoperation': typeOperationTecWareVerif(values.gender),
        'kol': values.kolvo,
        'operation': values.ostoperation
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
        <Breadcrumb.Item>Технические</Breadcrumb.Item>
        <Breadcrumb.Item>Движение по складу</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
        <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
          <Typography.Title level={2}>Движение по складу</Typography.Title>
          <Button type='primary' onClick={openModalMenu}>Добавить поле</Button>
          <Button type="primary" icon={<DownloadOutlined />} onClick={toPrint} ></Button>
        </Space>
        <Table dataSource={dataSourceTecWare} columns={columnsTecWare}></Table>
      </div>
      <Modal title='Оформление нового счёта' open={open} onCancel={handleCancel} footer={false}>
        <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
          <Form.Item name="date" label="Дата изменения" rules={[{ required: true }]}>
            <DatePicker placeholder='Дата' />
          </Form.Item>
          <Form.Item name="position" label="Позиция товара" rules={[{ required: true }]}>
            <Input placeholder='Товар' />
          </Form.Item>
          <Form.Item name="typeoperation" label="Тип операции" rules={[{ required: true }]}>
            <Select placeholder='Тип операции'>
              <Option value="sale">Продажа</Option>
              <Option value="going">Приход</Option>
              <Option value="currect">Корректировка</Option>
            </Select>
          </Form.Item>
          <Form.Item name="kolvo" label="Количество, шт" rules={[{ required: true }]}>
            <Input placeholder='Количество' />
          </Form.Item>
          <Form.Item name="ostoperation" label="Остаток после операции" rules={[{ required: true }]}>
            <Input placeholder='Товар' />
          </Form.Item>
          <Form.Item style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button type='primary' htmlType='submit'>Добавить</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default TecWarehouse