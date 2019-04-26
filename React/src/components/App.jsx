import React, { useState } from 'react';
import { hot } from 'react-hot-loader';


const App = () => {
    const [title, setTitle] = useState('');

    setTitle('Hello, world');

    return (
        { title }
    )
}


export default hot(module)(App);