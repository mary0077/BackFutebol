const express = require("express");
const app = express();
const PORT = 3015;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let dadosRecebidos = null;

app.post("/time", (req, res) => {
  const { nomeTime, jogadores, treinador, titulo, estadio, fundacao } =
    req.body;

  if (nomeTime && jogadores && treinador && titulo && estadio && fundacao) {
    dadosRecebidos = {
      nomeTime,
      jogadores,
      treinador,
      titulo,
      estadio,
      fundacao,
    };
    res.status(200).send("Dados recebidos com sucesso!");
  } else {
    res.status(400).send("Erro: Todos os 6 dados devem ser fornecidos.");
  }
});

app.get("/time", (req, res) => {
  if (dadosRecebidos) {
    const { nomeTime, jogadores, treinador, titulo, estadio, fundacao } =
      dadosRecebidos;

    const responseHTML = `
  <h1>Dados Recebidos</h1>
  <p><strong>Nome do Time:</strong> ${nomeTime}</p>
  <p><strong>Jogadores:</strong> ${jogadores}</p>
  <p><strong>Treinador:</strong> ${treinador}</p>
  <p><strong>Título:</strong> ${titulo}</p>
  <p><strong>Estádio:</strong> ${estadio}</p>
  <p><strong>Fundação:</strong> ${fundacao}</p>
  `;

    res.send(responseHTML);
  } else {
    res.status(400).send("Erro: Nenhum dado recebido ainda.");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
