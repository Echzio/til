import { First } from '@/views/first/first';
import { FirstDeep } from '@/views/firstDeep/firstDeep';
import { Second } from '@/views/second/second';

export const routes = [
  {
    path: '/',
    exact: true,
    component: First,
    routes: [
      {
        path: '/',
        exact: true,
        component: FirstDeep,
      },
    ],
  },
  {
    path: '/second',
    component: Second,
  },
];
