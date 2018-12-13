const http = require('http');
const url = require('url');

// объявляем сервер
const server = new http.Server(function (req, res) {
    // смотрим что получаем
    // console.log( req.method, req.url);

    // детальный просмотр
    const urlParsed = url.parse(req.url, true);
    if (urlParsed.pathname == '/awesome' && urlParsed.query.message) {
        res.end(urlParsed.query.message);
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});


// прослушивание порта
server.listen(1337, '127.0.0.1');