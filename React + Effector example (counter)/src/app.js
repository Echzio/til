import React from 'react'

import { hot } from 'react-hot-loader/root';

import { useStore } from 'effector-react'
import { $counter, changeCounter, methods } from '@/store/counter'
import { $response, $isFetched, fetchData } from '@/store/response'

import { numberFormatter } from '@/utils/'

const App = () => {
    const counter = useStore($counter);
    const response = useStore($response);
    const isFetched = useStore($isFetched);

    return (
        <div>
            <h1>app</h1>
            <h2>counter is: {numberFormatter(counter)}</h2>
            <label htmlFor="change-counter">change counter: </label>
            <input id="change-counter" onChange={changeCounter} value={counter} />
            <button onClick={methods.increment}>+1</button>
            <button onClick={methods.decrement}>-1</button>
            <button disabled={isFetched} onClick={fetchData}>{isFetched ? 'wait' : 'get response'}</button>
            {response.map(({ id, title }) => <p key={id}>{title}</p>)}
        </div>
    )
}

export default hot(App)