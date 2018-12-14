import React from 'react';


let Article = (props) => {
    // деструктуризация
    const { article } = props;
    console.log(props);
    const body = <section>{article.text}</section>
    return (
        <div className='Hello' style={{ color: 'red' }}>
            <h2>{article.title}</h2>
            {body}
            <h3>
                create date: {
                    (new Date(article.date)).toDateString()
                }
            </h3>
        </div>
    )
}

export default Article;