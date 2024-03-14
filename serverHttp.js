const http = require('http');

const port = 8010;

const server = http.createServer((req, res) => {

    console.log(req.url);

    switch (req.url) {
        case '/':
            res.end("Welcome to Home...")
            break;

        case '/about':
            res.end("Welcome to About...")
            break;

        default:
            res.end("page not found.... Error_404...!#@")
            break;
    }


});

server.listen(port, () => {
    console.log("server is running at port : " + port);
})
