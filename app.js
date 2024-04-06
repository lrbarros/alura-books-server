const express = require('express')
const routerLivros = require('./rotas/livros')
const rotaFavorito = require("./rotas/favorito")
const cors = require('cors');

const app = express()
app.use(cors());

const port = 8000

app.use(express.json())

app.use('/livros', routerLivros)
app.use('/favoritos', rotaFavorito)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
