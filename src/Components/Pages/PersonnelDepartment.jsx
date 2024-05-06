import { Breadcrumb, theme, Table, Space, Typography, Button, Modal, Form, Input, DatePicker, Select } from 'antd';
import React, { useState } from 'react'
import { columnsPersonnelD, dataSourcePersonnelD } from '../../data';
import { genderVerif } from '../unitls';

const PersonnelDepartment = () => {

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
    dataSourcePersonnelD.push(
      {
        'key': (dataSourcePersonnelD.length + 1).toString(),
        'id': (dataSourcePersonnelD.length + 1).toString(),
        'fcs': values.fcs,
        'position': values.position,
        'department': values.department,
        'dof': values.dof.$D + '.' + values.dof.$M + '.' + values.dof.$y,
        'gender': genderVerif(values.gender),
        'telefon': values.telefon,
        'salar': values.salar
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
        <Breadcrumb.Item>Управление кадрами</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
        <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
          <Typography.Title level={2}>Управление кадрами</Typography.Title>
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
        <Table dataSource={dataSourcePersonnelD} columns={columnsPersonnelD}></Table>
      </div>
      <Modal title='Оформление нового счёта' open={open} onCancel={handleCancel} footer={false}>
        <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>

          <Form.Item name="fcs" label="ФИО" rules={[{ required: true }]}>
            <Input placeholder='ФИО' />
          </Form.Item>
          <Form.Item name="position" label="Должность" rules={[{ required: true }]}>
            <Input placeholder='Должность' />
          </Form.Item>
          <Form.Item name="department" label="Отдел" rules={[{ required: true }]}>
            <Input placeholder='Покупатель' />
          </Form.Item>
          <Form.Item name="dof" label="Дата рождения" rules={[{ required: true }]}>
            <DatePicker placeholder='Выбор даты' />
          </Form.Item>
          <Form.Item name="gender" label="Пол" rules={[{ required: true }]}>
            <Select>
              <Option value="male">Мужчина</Option>
              <Option value="female">Женщина</Option>
            </Select>
          </Form.Item>
          <Form.Item name="telefon" label="Телефон" rules={[{ required: true }]}>
            <Input placeholder='Номер телефона сотрудника' />
          </Form.Item>
          <Form.Item name="salar" label="Зарплата" rules={[{ required: true }]}>
            <Input placeholder='Заработная плата' />
          </Form.Item>
          <Form.Item style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button type='primary' htmlType='submit'>Добавить</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default PersonnelDepartment