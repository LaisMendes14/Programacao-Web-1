const http = require('http');

let totalAcessos = 0;

const server = http.createServer((req, res) => {
    if (req.url === '/contador') {
        totalAcessos++;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ acessos: totalAcessos }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
