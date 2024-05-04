import { Layout } from 'antd';
import LayoutSider from './Components/Layout/LayoutSider';
import LayoutHeader from './Components/Layout/LayoutHeader';
import LayoutContent from './Components/Layout/LayoutContent';
import { Navigate, redirect } from 'react-router-dom';

function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutSider/>
      <Layout>
        <LayoutHeader/>
        <LayoutContent/>
        <Navigate to="/mainpage"/>
      </Layout>
    </Layout>
  )
}

export default App
