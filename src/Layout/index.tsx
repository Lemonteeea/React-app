import React from 'react'
import { Menu, Layout as AntLayout } from 'antd'
import { useHistory } from 'react-router'
import RouterByConfig, { PropsWithRoutes } from '@/Router'

const { Header, Content, Footer } = AntLayout
const Layout: React.FC<PropsWithRoutes<{}>> = (props) => {
  const history = useHistory()
  return (
    <AntLayout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          selectedKeys={[history.location.pathname.slice(0, 1)]}
          onClick={(e) => history.push(e.key)}
        >
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">about</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ height: '60vh' }}>
          <RouterByConfig routes={props.routes}></RouterByConfig>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Created By Lemonteeea</Footer>
    </AntLayout>
  )
}
export default Layout
