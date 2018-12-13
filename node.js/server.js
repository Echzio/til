const http = require('http');
const url = require('url');

// объявляем сервер
const server = new http.Server(function (req, res) {
    // смотрим что получаем
    // console.log( req.method, req.url);

    // просмотр заголовков
    console.log(req.headers);

    // детальный просмотр
    
    const urlParsed = url.parse(req.url, true);
    if (urlParsed.pathname == '/awesome' && urlParsed.query.message) {
        res.setHeader('Cache-control', 'no-cache'); // передаем заголовок если хотим
        res.statusCode = 200; // OK
        res.end(urlParsed.query.message);
    } else {
        res.statusCode = 404; // Not Found
        res.end('Page not found');
    }
    
});


// прослушивание порта
server.listen(1337, '127.0.0.1');