import { Breadcrumb, theme, Table, Space, Typography, Button, Modal, Form, Input, DatePicker, InputNumber } from 'antd';
import React, { useState } from 'react'
import { columnsExpenseIncome, dataSourceExpenseIncome } from '../../data';
import TextArea from 'antd/es/input/TextArea';
import { DownloadOutlined } from '@ant-design/icons';

const BudExpensesandIncome = () => {

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

  const toPrint = () => {
    print()
  }

  const onFinish = (values) => {
    dataSourceExpenseIncome.push(
      {
        'key': (dataSourceExpenseIncome.length + 1).toString(),
        'id': (dataSourceExpenseIncome.length + 1).toString(),
        'statiya': values.statiya,
        'symma': values.symma,
        'date': values.date.$D + '.' + values.date.$M + '.' + values.date.$y,
        'comment': values.comment,
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
        <Breadcrumb.Item>Расходы и доходы</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
        <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
          <Typography.Title level={2}>Расходы и доходы</Typography.Title>
          <Button type='primary' onClick={openModalMenu}>Добавить поле</Button>
          <Button type="primary" icon={<DownloadOutlined />} onClick={toPrint} ></Button>
        </Space>
        <div style={{ padding: 24, marginBottom: 40, background: '#f0f0f0', borderRadius: borderRadiusLG }}>
          <Typography.Text>Раздел «доходов и расходов» в ERP-системе представляет собой инструмент для учёта, анализа и контроля финансовых операций компании. Он позволяет отслеживать все поступления и траты, связанные с основной деятельностью предприятия.<br /></Typography.Text>
          <Typography.Text> <strong>— Название статьи </strong> — наименование статьи, по которой происходит движение денежных средств.<br /></Typography.Text>
          <Typography.Text> <strong>— Сумма, р. </strong> — величина денежных средств, которая была потрачена или получена.<br /></Typography.Text>
          <Typography.Text> <strong>— Дата </strong> — день, когда произошло движение денежных средств.<br /></Typography.Text>
          <Typography.Text> <strong>— Комментарий	</strong> — описание операции, связанной с движением денежных средств.<br /></Typography.Text>
        </div>
        <Table dataSource={dataSourceExpenseIncome} columns={columnsExpenseIncome}></Table>
      </div>
      <Modal title='Оформление нового счёта' open={open} onCancel={handleCancel} footer={false}>
        <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
          <Form.Item name="statiya" label="Название статьи" rules={[{ required: true }]}>
            <Input placeholder='Название статьи' />
          </Form.Item>
          <Form.Item name="symma" label="Сумма, р." rules={[{ required: true }]}>
            <InputNumber placeholder='Сумма' />
          </Form.Item>
          <Form.Item name="date" label="Дата" rules={[{ required: true }]}>
            <DatePicker placeholder='Дата' />
          </Form.Item>
          <Form.Item name="comment" label="Комментарий" rules={[{ required: true }]}>
            <TextArea placeholder='Комментарий' />
          </Form.Item>
          <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type='primary' htmlType='submit'>Добавить</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default BudExpensesandIncome