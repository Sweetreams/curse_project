import { Breadcrumb, Button, Space, Table, Typography, theme } from 'antd'
import React from 'react'
import { columnsTecWare, dataSourceTecWare } from '../../data';

const TecWarehouse = () => {

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

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Технические</Breadcrumb.Item>
        <Breadcrumb.Item>Движение по складу</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
        <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
          <Typography.Title level={2}>Движение по складу</Typography.Title>
          <Button type='primary'>Добавить поле</Button>
        </Space>
        <Table dataSource={dataSourceTecWare} columns={columnsTecWare}></Table>
      </div>
    </>
  )
}

export default TecWarehouse