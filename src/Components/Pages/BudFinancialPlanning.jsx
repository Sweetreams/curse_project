import { Breadcrumb, theme, Table, Space, Typography, Button, Modal, Form, Input, DatePicker, Select } from 'antd';
import React, { useState } from 'react'
import { columnsFinPlanning, columnsPersonnelD, dataSourceFinPlanning, dataSourcePersonnelD } from '../../data';
import { genderVerif, periodVerif, typeOperationVerif } from '../unitls';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import TextArea from 'antd/es/input/TextArea';

const BudFinancialPlanning = () => {

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

  const handleOk = (values) => {

  }

  const onFinish = (values) => {
    console.log(values)
    dataSourceFinPlanning.push(
      {
        'key': (dataSourceFinPlanning.length + 1).toString(),
        'id': (dataSourceFinPlanning.length + 1).toString(),
        'statiya': values.statiya,
        'symma': values.symma,
        'date': values.date.$D + '.' + values.date.$M + '.' + values.date.$y,
        'period': periodVerif(values.period),
        'comment': values.comment,
        'typeoperation': typeOperationVerif(values.typeoperation),
        'prognoz': values.prognoz,
        'fact': values.fact
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
        <Breadcrumb.Item>Бюджетирование и казнайчество</Breadcrumb.Item>
        <Breadcrumb.Item>Финансовое планирование</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
        <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
          <Typography.Title level={2}>Финансовое планирование</Typography.Title>
          <Button type='primary' onClick={openModalMenu}>Добавить поле</Button>
        </Space>
        <div style={{ padding: 24, marginBottom: 40, background: '#f0f0f0', borderRadius: borderRadiusLG }}>
          <Typography.Text>Раздел «Финансовое планирование» в ERP-системе представляет собой инструмент для управления финансовыми ресурсами компании. Он позволяет анализировать, планировать и контролировать доходы и расходы, а также прогнозировать финансовые результаты:<br /></Typography.Text>
          <Typography.Text> <strong>— Название статьи </strong> — наименование статьи, по которой происходит движение денежных средств.<br /></Typography.Text>
          <Typography.Text> <strong>— Сумма, р. </strong> величина денежных средств, которая была потрачена или получена.<br /></Typography.Text>
          <Typography.Text> <strong>— Дата </strong> — день, когда произошло движение денежных средств.<br /></Typography.Text>
          <Typography.Text> <strong>— Период	</strong> — временной интервал, к которому относится операция.<br /></Typography.Text>
          <Typography.Text> <strong>— Комментарий </strong> — описание операции, связанной с движением денежных средств. <br /></Typography.Text>
          <Typography.Text> <strong>— Тип операции </strong> — вид операции. <br /></Typography.Text>
          <Typography.Text> <strong>— Прогноз, р. </strong> — ожидаемая сумма доходов или расходов на определённый период. <br /></Typography.Text>
          <Typography.Text> <strong>— Факт, р. </strong> — фактическая сумма доходов или расходов за определённый период. <br /></Typography.Text>
        </div>
        <Table dataSource={dataSourceFinPlanning} columns={columnsFinPlanning}></Table>
      </div>
      <Modal title='Оформление нового счёта' open={open} onOk={handleOk} onCancel={handleCancel}>
        <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
          <Form.Item name="statiya" label="Название статьи" rules={[{ required: true }]}>
            <Input placeholder='Название статьи' />
          </Form.Item>
          <Form.Item name="symma" label="Сумма, р." rules={[{ required: true }]}>
            <Input placeholder='Сумма' />
          </Form.Item>
          <Form.Item name="date" label="Дата" rules={[{ required: true }]}>
            <DatePicker placeholder='Дата' />
          </Form.Item>
          <Form.Item name="period" label="Период" rules={[{ required: true }]}>
          <Select placeholder='Период'>
              <Option value="day">День</Option>
              <Option value="week">Неделя</Option>
              <Option value="month">Месяц</Option>
              <Option value="quarter">Квартал</Option>
              <Option value="year">Год</Option>
            </Select>
          </Form.Item>
          <Form.Item name="comment" label="Комментарий" rules={[{ required: true }]}>
            <TextArea placeholder='Комментарий'/>
          </Form.Item>
          <Form.Item name="typeoperation" label="Тип операции">
          <Select placeholder='Тип операции'>
              <Option value="doxod">Доход</Option>
              <Option value="razxod">Расход</Option>
            </Select>
          </Form.Item>
          <Form.Item name="prognoz" label="Прогноз, р.">
            <Input placeholder='Прогноз'/>
          </Form.Item>
          <Form.Item name="fact" label="Факт, р.">
            <Input placeholder='Факт'/>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>asfs</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default BudFinancialPlanning