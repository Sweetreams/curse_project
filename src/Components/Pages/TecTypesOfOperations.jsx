import { Breadcrumb, Button, Space, Table, Typography, theme } from 'antd';
import React from 'react'
import { columnsTecTypes, dataSourceTecTypes } from '../../data';

const TecTypesOfOperations = () => {
   
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
        <Breadcrumb.Item>Типы операций</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
        <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
          <Typography.Title level={2}>Типы операций</Typography.Title>
        </Space>
        <Table dataSource={dataSourceTecTypes} columns={columnsTecTypes}></Table>
      </div>
    </>
  )
}

export default TecTypesOfOperations