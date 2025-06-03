const express = require("express")
const router = express.Router()
const produtosControllers = require("../controllers/produtosControllers")

router.post("/", produtosControllers.criarProdutos)
router.get("/", produtosControllers.listarProdutos)
router.put("/:id", produtosControllers.atualizarProdutos)
router.delete("/:id", produtosControllers.deletarProdutos)

module.exports = router;