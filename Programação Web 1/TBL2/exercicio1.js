const http = require('http');

const server = http.createServer((req, res) => {
    const partes = req.url.split('/');

    if (partes[1] === 'usuario' && partes[2]) {
        const id = partes[2];

        if (isNaN(id)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ erro: 'O ID deve ser um número' }));
            return;
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            id: Number(id),
            nome: `Usuário ${id}`
        }));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
