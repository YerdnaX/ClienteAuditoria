const app = require('./app');

const PORT = process.env.PORT || 3014;

app.listen(PORT, () => {
  console.log(`API publico-auditorias-login escuchando en el puerto ${PORT}`);
});
