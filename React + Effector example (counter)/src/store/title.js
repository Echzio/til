import { createStore, createEvent } from 'effector'
import { numberFormatter } from '@/utils/'

const changeTitle = createEvent('changeTitle')

const modilfyTitle = changeTitle.map(numberFormatter)

const $title = createStore('Counter App').on(modilfyTitle, (_, payload) => `Counter App. count: ${payload}`)

$title.watch(payload => {
    document.title = payload
})

export {
    changeTitle
}