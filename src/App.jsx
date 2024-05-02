import { Layout } from 'antd';
import LayoutSider from './Components/Layout/LayoutSider';
import LayoutHeader from './Components/Layout/LayoutHeader';
import LayoutContent from './Components/Layout/LayoutContent';

function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LayoutSider/>
      <Layout>
        <LayoutHeader/>
        <LayoutContent/>
      </Layout>
    </Layout>
  )
}

export default App
