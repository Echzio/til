function getPosts() {
    return fetch('http://jsonplaceholder.typicode.com/posts').then(data => data.json()).then(data => data)
}

export {
    getPosts
}