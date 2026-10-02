const titulo = document.getElementById('titulo');
const inputNome = document.getElementById('input-nome');
const btnAtualizar = document.getElementById('btn-atualizar');
const contador = document.getElementById('contador');
const btnContar = document.getElementById('btn-contar');
const descricao = document.getElementById('descricao');
const btnDescricao = document.getElementById('btn-descricao');
const btnModo = document.getElementById('btn-modo');

let contagem = 0;

btnAtualizar.addEventListener('click', function () {
    const nome = inputNome.value.trim();
    if (nome !== '') {
        titulo.textContent = nome;
    }
});

btnContar.addEventListener('click', function () {
    contagem++;
    contador.textContent = contagem;
});

btnDescricao.addEventListener('click', function () {
    if (descricao.style.display === 'none') {
        descricao.style.display = 'block';
        btnDescricao.textContent = 'Esconder Descrição';
    } else {
        descricao.style.display = 'none';
        btnDescricao.textContent = 'Mostrar Descrição';
    }
});

btnModo.addEventListener('click', function () {
    document.body.classList.toggle('escuro');
});
