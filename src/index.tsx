import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.less'
import './index.less'
import Home from './pages/Home'
import RouterByConfig from '@/Router'
import About from './pages/About'
import Layout from '@/Layout'

const routes = [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/about',
        component: About,
      },
    ],
  },
]

ReactDOM.render(
  <React.StrictMode>
    <RouterByConfig routes={routes}></RouterByConfig>
  </React.StrictMode>,
  document.getElementById('root'),
)
