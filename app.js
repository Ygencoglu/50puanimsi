

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Merhaba ben Yusuf GENCOGLU!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor.`);
});
