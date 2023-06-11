const express = require('express');
const app = express();
const PORT = 3015;

// Configuração para analisar JSON no corpo da requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para receber os dados do frontend via POST
app.post('/', (req, res) => {
  const { nomeTime, jogadores, treinador, titulo, estadio, fundacao } = req.body;

  // Verifica se foram fornecidos todos os 6 dados
  if (nomeTime && jogadores && treinador && titulo && estadio && fundacao) {
    res.status(200).send('Dados recebidos com sucesso!');
  } else {
    // Caso não sejam fornecidos todos os 6 dados, envia uma mensagem de erro
    res.status(400).send('Erro: Todos os 6 dados devem ser fornecidos.');
  }
});

// Rota para exibir os dados no navegador
app.get('/', (req, res) => {
  const { nomeTime, jogadores, treinador, titulo, estadio, fundacao } = req.query;

  // Verifica se foram fornecidos todos os 6 dados
  if (nomeTime && jogadores && treinador && titulo && estadio && fundacao) {
    // Constrói a resposta HTML com os dados recebidos
    const responseHTML = `
      <h1>Dados Recebidos</h1>
      <p><strong>Nome do Time:</strong> ${nomeTime}</p>
      <p><strong>Jogadores:</strong> ${jogadores}</p>
      <p><strong>Treinador:</strong> ${treinador}</p>
      <p><strong>Título:</strong> ${titulo}</p>
      <p><strong>Estádio:</strong> ${estadio}</p>
      <p><strong>Fundação:</strong> ${fundacao}</p>
    `;

    // Envia a resposta HTML ao navegador
    res.send(responseHTML);
  } else {
    // Caso não sejam fornecidos todos os 6 dados, envia uma mensagem de erro
    res.status(400).send('Erro: Todos os 6 dados devem ser fornecidos.');
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
