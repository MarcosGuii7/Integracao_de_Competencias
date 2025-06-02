const express = require("express")
const router = express.Router()
const produtosControllers = require("../contollers/produtosControllers")

router.post("/", produtosControllers.criarProduto)
router.get("/", produtosControllers.listarProdutos)
router.put("/:id", produtosControllers.atualizarProdutos)
router.delete("/:id", produtosControllers.deletarProdutos)

module.exports = router;