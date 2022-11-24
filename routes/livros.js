const { Router } = require("express");
const { getLivros, postLivro, patchLivro, deleteLivros } = require("../controllers/livros");

const router = Router()

router.get("/", getLivros)

router.post("/", postLivro)

router.patch("/", patchLivro)

router.delete("/", deleteLivros)

module.exports = router