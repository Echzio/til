import App from './components/app/app'
import { Main } from './pages/main/main'
import Test from './pages/test/test'
import Tabs from './pages/tabs/tabs'
import { Pagination } from '@/pages/pagination/pagination'

export const routes = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Main
      },
      {
        path: '/test',
        component: Test
      },
      {
        path: '/tabs',
        component: Tabs
      },
      {
        path: '/pagination/:page',
        component: Pagination,
      },
      {
        path: '/pagination',
        component: Pagination,
      },
    ]
  },
]
