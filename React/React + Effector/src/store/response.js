import { createStore, createEffect } from 'effector';
import { getPosts } from '@/api/';

const fetchData = createEffect({
  handler: async () => {
    const response = await getPosts();
    return response;
  },
});

const $isFetched = createStore(false).on(fetchData.pending, (_, payload) => payload);
const $response = createStore([])
  .on(fetchData.doneData, (_, payload) => payload)
  .on(fetchData.pending, (state, payload) => (payload ? [] : state));

export { $response, $isFetched, fetchData };
