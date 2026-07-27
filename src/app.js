const express = require('express');
const cors = require('cors');
const auditoriasLoginRoutes = require('./routes/auditorias-login.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API funcionando correctamente',
  });
});

app.use('/auditorias-login', auditoriasLoginRoutes);

module.exports = app;
