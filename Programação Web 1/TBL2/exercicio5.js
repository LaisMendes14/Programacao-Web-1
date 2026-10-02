const http = require('http');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'progweb',
    password: 'postgres',
    port: 5432
});

const server = http.createServer(async (req, res) => {
    const partes = req.url.split('/');

    if (partes[1] === 'usuarios' && partes[2]) {
        const id = Number(partes[2]);

        if (isNaN(id)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ erro: 'ID inválido' }));
            return;
        }

        try {
            const resultado = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);

            if (resultado.rows.length > 0) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(resultado.rows[0]));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ erro: 'Usuário não encontrado' }));
            }
        } catch (erro) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ erro: 'Erro interno do servidor' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
