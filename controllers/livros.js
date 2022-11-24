const livros = require("../livros.json")
const fs = require("fs")
const { getTodosLivros } = require("../servicos/livros")

function getLivros(req,res) {
    try {
        const livros = getTodosLivros()
        res.json(livros)
    } catch (error) {
        res.status(500)
        res.json({error})   
    }
}

function postLivro(req, res) {
    // try {
    //     const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    //     const novoLivro = req.body
    //     console.log(req)
    //     fs.writeFileSync("livros.json",JSON.stringify([...livrosAtuais, novoLivro]))

    //     res.status(200)
    // } catch (error) {
    //     res.status(500)     aula 4
    //     res.json({error})
    // }
}

function patchLivro(req, res) {
    // try {
    //     fs.writeFileSync("livros.json",{"teste": 2})
    // } catch (error) {
    //     res.status(500)
    //     res.json({error:error.Error()})
    // }
}

function deleteLivros(req, res) {
    // try {
    //     res.json(livros)
    // } catch (error) {
    //     res.status(500)
    //     res.json({error:error.Error()})
    // }
}

module.exports = {
    getLivros,
    patchLivro,
    deleteLivros,
    postLivro
}