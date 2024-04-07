const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rota para obter a data atualizada em tempo real
app.get('/api/data-atual', (req, res) => {
  const dataAtual = new Date();
  res.json({ dataAtual: dataAtual });
});

// Servir o diretório 'api'
app.use('/api', express.static('api'));

// Servir o arquivo index.html
app.use('/', express.static('index.html'));

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
