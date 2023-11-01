const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'Node.js');

    res.writeHead(404, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js'
    });

    let body = [];

    req
        .on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            console.log(body);
        });

    const data = JSON.stringify({
        success: true,
        error: 'Not Found',
        data: null,
    });

    res.end(data);
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server lagi running di port ${PORT}`));

// const http = require("http");

// const todos = [
//     { id: 1, text: 'Todo One'},
//     { id: 2, text: 'Todo Two'},
//     { id: 3, text: 'Todo Three'},
// ]

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.setHeader('X-Powered-By', 'Node.js');

//     res.writeHead(404, {
//         'Content-Type': 'application/json',
//         'X-Powered-By': 'Node.js'
//     });

//     const {method, url} = req;
//     let body = [];

//     req.on('data', chunk => {
//         body.push(chunk);
//     }).on('end', () => {
//         body = Buffer.concat(body).toString();
//         console.log(body);

        
//     });

//     const data = JSON.stringify({
//         success: true,
//         error: 'Not Found',
//         data: null,
//     });

//     res.end(data);
// });

// const PORT = 5000;

// server.listen(PORT, () => console.log(`Server lagi running di port ${PORT}`));