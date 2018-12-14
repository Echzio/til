import React from 'react';
import Article from './Article';
// подключаем статью для передачи данных
import articles from '../fixtures';

let App = () => {
    return (
        <div>
            <h1>App Name</h1>
            {/* атрибуты для передачи */}
            <Article article={articles[0]} foo="bar" flag />
        </div>
    )
}

export default App;