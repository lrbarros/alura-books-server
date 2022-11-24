const livros = require("../livros.json")

function getLivros(req, res) {
    try {
        res.json(livros)
    } catch (error) {
        res.status(500)
        res.json({error:error.Error()})
    }
}

function postLivro(req, res) {
    try {
        res.json(livros)
    } catch (error) {
        res.status(500)
        res.json({error:error.Error()})
    }
}

function patchLivro(req, res) {
    try {
        res.json(livros)
    } catch (error) {
        res.status(500)
        res.json({error:error.Error()})
    }
}

function deleteLivros(req, res) {
    try {
        res.json(livros)
    } catch (error) {
        res.status(500)
        res.json({error:error.Error()})
    }
}

module.exports = {
    getLivros,
    patchLivro,
    deleteLivros,
    postLivro
}