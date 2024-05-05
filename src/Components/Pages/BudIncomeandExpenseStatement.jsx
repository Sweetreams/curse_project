import { Breadcrumb, theme, Table, Space, Typography, Button, Modal, Form, Input, DatePicker, Select, InputNumber } from 'antd';
import React, { useState } from 'react'
import { columnsExpenseIncome, columnsFinPlanning, columnsPersonnelD, dataSourceExpenseIncome, dataSourceFinPlanning, dataSourcePersonnelD } from '../../data';
import { genderVerif, periodVerif, typeOperationVerif } from '../unitls';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import TextArea from 'antd/es/input/TextArea';

const BudIncomeandExpenseStatement = () => {

  var doxodRazhod = [
    {
      name: 'Доход',
      doxod: 0,
    },
    {
      name: 'Расход',
      razhod: 0,
    },
  ]

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const forDiagrama = (values) => {
    var doxod = 0
    var razhod = 0
    values.forEach(el => {
      if (el.symma < 0) {
        doxodRazhod[1].razhod -= el.symma
      }
      if (el.symma >= 0) {
        doxodRazhod[0].doxod += el.symma
      }
    });
  }

  console.log(forDiagrama(dataSourceExpenseIncome))
  console.log(doxodRazhod)

  return (
    <>

      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Бюджетирование и казнайчество</Breadcrumb.Item>
        <Breadcrumb.Item>Отчёт о доходах и расходов</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
        <Space align='center' style={{ marginBottom: 40, gap: 30 }}>
          <Typography.Title level={2}>Отчёт о доходах и расходов</Typography.Title>
        </Space>
        <div style={{ padding: 24, marginBottom: 40, background: '#f0f0f0', borderRadius: borderRadiusLG }}>
          <Typography.Text> Отчёт о доходах и расходах — это документ, который показывает финансовые результаты деятельности компании за определённый период.<br /></Typography.Text>
          <Typography.Text> Отчёт о доходах и расходах является важным инструментом для анализа финансового состояния компании и принятия управленческих решений. Он позволяет оценить эффективность деятельности компании, выявить проблемные области и определить перспективы развития.<br /></Typography.Text>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <BarChart data={doxodRazhod} width={600} height={300}>
            <XAxis dataKey='name' stroke='#8884d8' />
            <YAxis />
            <CartesianGrid stroke='#ccc' strokeDasharray="3 3" />
            <Bar dataKey="doxod" fill='#8884d8' barSize={120} />
            <Bar dataKey="razhod" fill='#82ca9d' barSize={120} />
          </BarChart>
        </div>
      </div>
    </>
  )
}

export default BudIncomeandExpenseStatement