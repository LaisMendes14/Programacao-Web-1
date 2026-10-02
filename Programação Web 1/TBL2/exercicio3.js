const http = require('http');

const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500.00 },
    { id: 2, nome: 'Mouse', preco: 89.90 },
    { id: 3, nome: 'Teclado', preco: 199.90 },
    { id: 4, nome: 'Monitor', preco: 1200.00 },
    { id: 5, nome: 'Headset', preco: 250.00 }
];

const server = http.createServer((req, res) => {
    const partes = req.url.split('/');

    if (req.url === '/api/produtos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(produtos));

    } else if (partes[1] === 'api' && partes[2] === 'produtos' && partes[3]) {
        const id = Number(partes[3]);
        const produto = produtos.find(p => p.id === id);

        if (produto) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(produto));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ erro: 'Produto não encontrado' }));
        }

    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
