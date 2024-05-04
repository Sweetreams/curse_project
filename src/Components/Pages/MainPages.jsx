import { Breadcrumb, Space, Typography, theme } from 'antd';
import React from 'react'

const MainPages = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG }}>
        <Space align='center' style={{ marginBottom: 20, gap: 30 }}>
          <Typography.Title level={2}>Приветсвуем вас в WorkMe🎉</Typography.Title>
        </Space>
        <br />
        <div>
          <Typography.Title level={4}>Мы рады приветствовать вас на нашем сайте, посвящённом автоматизации производственных процессов предприятия. Наша цель — сделать работу вашего предприятия более эффективной, продуктивной и прибыльной.<br /></Typography.Title>
          <br />
          <Typography.Title level={4}>WorkMe предлагает широкий спектр решений для автоматизации производства.<br /></Typography.Title>
          <br />
          <Typography.Title level={4}>Наши решения помогут вам оптимизировать производственные процессы, снизить издержки и повысить качество продукции.<br /></Typography.Title>
          <br />
          <Typography.Title level={4}><strong>С WorkMe ваше производство станет более эффективным и прибыльным!( -_•)▄︻テحكـ━一💥</strong><br /></Typography.Title>
        </div>
      </div>
    </>

  )
}

export default MainPages