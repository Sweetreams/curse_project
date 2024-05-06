import { Breadcrumb, Button, Space, Table, Typography, theme } from 'antd';
import React from 'react'
import { columnsTecTypes, dataSourceTecTypes } from '../../data';
import { DownloadOutlined } from '@ant-design/icons';

const TecTypesOfOperations = () => {
   
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

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Технические</Breadcrumb.Item>
        <Breadcrumb.Item>Типы операций</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
        <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
          <Typography.Title level={2}>Типы операций</Typography.Title>
          <Button type="primary" icon={<DownloadOutlined />} onClick={toPrint} ></Button>
        </Space>
        <Table dataSource={dataSourceTecTypes} columns={columnsTecTypes}></Table>
      </div>
    </>
  )
}

export default TecTypesOfOperations