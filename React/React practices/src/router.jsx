import App from './components/app/app'
import { Main } from './pages/main/main'
import { ConcatPages } from './pages/concatPages/concatPages'
import Test from './pages/test/test'
import Tabs from './pages/tabs/tabs'
import { ModalPage } from '@/pages/modalPage/modalPage';

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
        path: '/concat',
        strict: false,
        component: ConcatPages,
      },
      {
        path: '/modal',
        component: ModalPage
      }
    ]
  },
]
