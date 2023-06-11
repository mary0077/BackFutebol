const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configurar o body-parser para lidar com o corpo das requisições
app.use(bodyParser.json());

// Rota POST para receber os dados do jogador
app.post('/jogador', (req, res) => {
  const { nome, idade, clube, posicao, nacionalidade, gols } = req.body;

  // Realizar as operações desejadas com os dados recebidos
  // Neste exemplo, apenas exibimos os dados recebidos
  console.log('Dados do jogador:');
  console.log('Nome:', nome);
  console.log('Idade:', idade);
  console.log('Clube:', clube);
  console.log('Posição:', posicao);
  console.log('Nacionalidade:', nacionalidade);
  console.log('Gols:', gols);

  // Responder com uma mensagem de sucesso
  res.json({ mensagem: 'Dados do jogador recebidos com sucesso!' });
});

// Iniciar o servidor
app.listen(3010, () => {
  console.log('Servidor rodando na porta 3010');
});
