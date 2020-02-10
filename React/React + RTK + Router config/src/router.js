import { App } from '@/components/app/app'
import { First } from '@/pages/first/first'
import { FirstDeep } from '@/pages/firstDeep/firstDeep'
import { Second } from '@/pages/second/second'

export const routes = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: First,
        routes: [
          {
            path: '/',
            exact: true,
            component: FirstDeep
          }
        ]
      },
      {
        path: '/second',
        component: Second,
      }
    ]
  }
]