const livros = require("../livros.json")
const fs = require("fs")
const { getTodosLivros, getLivro, modificaLivro, insereLivro, deletaLivro } = require("../servicos/livros")

function getLivros(req,res) {
    try {
        const livros = getTodosLivros()
        res.json(livros)
    } catch (error) {
        res.status(500)
        res.json({error})   
    }
}

function getLivroPorId(req,res) {
    try {
        const id = req.params.id
        const livros = getLivro(id)
        console.log(livros)
        res.json(livros)
    } catch (error) {
        res.status(500)
        res.json({error})   
    }
}

function postLivro(req, res) {
    try {
        const livroInserido = insereLivro(req.body)
        res.status(201)
        res.json(livroInserido)
    } catch (error) {
        res.status(500)
        res.json({error})
    }
}

function patchLivro(req, res) {
    try {
        const livros = modificaLivro(req.params.id, req.body)

        res.json(livros)
    } catch (error) {
        res.status(500)
        res.json({error})
    }
}

function deleteLivro(req, res) {
    try {
        const idDeletado = deletaLivro(req.params.id)
        res.json({idDeletado})
    } catch (error) {
        res.status(500)
        res.json({error})
    }
}

module.exports = {
    getLivros,
    getLivroPorId,
    patchLivro,
    deleteLivro,
    postLivro
}