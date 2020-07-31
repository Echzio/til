import { createStore, createEvent, createApi, forward } from 'effector'

import { changeTitle } from '@/store/title'

const changeCounter = createEvent('changeCounter');

const formattedValue = changeCounter.map(e => {
    const data = e.target.value;
    if (Number(data) != data) return 0;
    return Number(data)
});

const $counter = createStore(0)
    .on(formattedValue, (_, payload) => payload)

const methods = createApi($counter, {
    increment: state => state + 1,
    decrement: state => state - 1,
})

forward({
    from: $counter,
    to: changeTitle
})

export {
    methods,
    $counter,
    changeCounter
}