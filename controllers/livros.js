const livros = require("../livros.json")

function getLivros(req, res) {
    try {
        res.json(livros)
    } catch (error) {
        res.status(500)
        res.json({error:error.Error()})
    }
}



module.exports = {
    getLivros
}