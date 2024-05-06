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
      <div style={{ padding: 24, background: colorBgContainer, borderRadius: borderRadiusLG }}>
        <Space align='center' style={{ marginBottom: 20, gap: 30 }}>
          <Typography.Title level={4}>Приветсвуем вас в WorkMe🎉</Typography.Title>
        </Space>
        <br />
        <div>
          <Typography.Text>Мы рады приветствовать вас на нашем сайте, посвящённом автоматизации производственных процессов предприятия. Наша цель — сделать работу вашего предприятия более эффективной, продуктивной и прибыльной.<br /></Typography.Text>
          <br />
          <Typography.Text>WorkMe предлагает широкий спектр решений для автоматизации производства.<br /></Typography.Text>
          <br />
          <Typography.Text>Наши решения помогут вам оптимизировать производственные процессы, снизить издержки и повысить качество продукции.<br /></Typography.Text>
          <br />
          <Typography.Text><strong>С WorkMe ваше производство станет более эффективным и прибыльным!</strong><br /></Typography.Text>
        </div>
      </div>
    </>

  )
}

export default MainPages