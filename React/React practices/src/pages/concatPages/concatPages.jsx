import React from 'react';
import { hot } from 'react-hot-loader'
import { Pagination } from '@/components/pagination/pagination'
import { Items } from '@/components/items/items'
import { Title } from '@/components/title/title'


export const ConcatPages = hot(module)(() => {
  return (
    <>
      {console.log('rerender body component')}
      <Title />
      <Items />
      <Pagination />
    </>
  )
});