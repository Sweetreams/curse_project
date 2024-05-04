import { Breadcrumb, Button, Space, Table, Tooltip, Typography, theme } from 'antd';
import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';
import { columnsReport, dataSourceReport } from '../../data';

const finReportPAges = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const dataGraf = [
        {
            name: 'GANSOR-1301880',
            uv: 239000,
            pv: 2000,
            amt: 2400
        },
        {
            name: 'HP ProDesk 400 G7 MT',
            uv: 1230000,
            pv: 2000,
            amt: 2400
        },
        {
            name: 'Lenovo IdeaCentre 3 07ADA05',
            uv: 1790000,
            pv: 2000,
            amt: 2400
        },
        {
            name: 'DELL Vostro 3681 SFF ',
            uv: 499599,
            pv: 2000,
            amt: 2400
        },

    ]

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Управление финансами</Breadcrumb.Item>
                <Breadcrumb.Item>Отчёт по позициям</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
                <Space align='center' style={{ marginBottom: 20, gap: 30 }}>
                    <Typography.Title level={2}>Отчёт по позициям</Typography.Title>
                </Space>
                <div style={{ padding: 24, marginBottom: 40, background: '#f0f0f0', borderRadius: borderRadiusLG }}>
                    <Typography.Text>Отчёты по позициям предоставляют пользователям информацию о текущем состоянии запасов, их движении и использовании. Эти отчёты помогают в принятии обоснованных решений о закупках, контроле за остатками и оптимизации складских операций.<br /></Typography.Text>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: 40}}>
                    <BarChart data={dataGraf} width={1000} height={300}>
                        <XAxis dataKey='name' stroke='#8884d8' />
                        <YAxis />
                        <CartesianGrid stroke='#ccc' strokeDasharray="5 5" />
                        <Bar dataKey="uv" fill='#8884d8' barSize={80} />
                    </BarChart>
                </div>
                <Table dataSource={dataSourceReport} columns={columnsReport}></Table>
            </div>
        </>
    )
}

export default finReportPAges