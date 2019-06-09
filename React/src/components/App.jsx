import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';


const App = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle('Hello, world');
    })   

    return <h1>{title}</h1>
}


export default hot(module)(App);