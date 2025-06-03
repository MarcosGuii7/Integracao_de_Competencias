const express = require("express")
const router = express.Router()
const controllersFuncionarios = require("../controllers/controllersFuncionarios")

router.post("/", controllersFuncionarios.cadastrarFuncionarios)
router.get("/", controllersFuncionarios.listarFuncionarios)
router.put("/:id", controllersFuncionarios.atualizarFuncionarios)
router.delete("/:id", controllersFuncionarios.deletarFuncionarios)

module.exports = router;