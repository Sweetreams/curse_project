import { Breadcrumb, Button, Space, Table, Typography, theme } from 'antd';
import React from 'react'
import { columnsTecStat, dataSourceTecStat } from '../../data';

const TecOrderStatus = () => {
  
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
        <Breadcrumb.Item>Статусы заказа</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
        <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
          <Typography.Title level={2}>Статусы заказа</Typography.Title>
        </Space>
        <Table dataSource={dataSourceTecStat} columns={columnsTecStat}></Table>
      </div>
    </>
  )
}

export default TecOrderStatus