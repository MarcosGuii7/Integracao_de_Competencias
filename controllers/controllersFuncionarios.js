const conexao = require("../db/conexao")

exports.cadastrarFuncionarios = (req, res) => {
    const {nome, cargo, salario} = req.body;
    conexao.query(
        "INSERT INTO funcionarios (nome, cargo, salario) VALUES (?,?,?)",
        [nome, cargo, salario],
        (err) => {
            if (err) return res.status(500).send("Erro ao cadastrar funcionário!");
            res.status(201).send("Funcionário cadastrado com sucesso");
        } 
    );
};

exports.listarFuncionarios =(req, res) => {
    conexao.query("SELECT * FROM funcionarios", (err, results) => {
        if (err) return res.status(500).send("Erro ao buscar cadastro!")
            res.status(200).send(results)
    })
}

exports.atualizarFuncionarios = (req, res) => {
    const {id} = req.params;
    const {nome, cargo, salario} = req.body;
    const query = "UPDATE funcionarios SET nome = ?, cargo = ?, salario = ? WHERE id = ?";

    conexao.query(query, [nome, cargo, salario, id], (err, results) => {
        if(err) return res.status(500).send("Erro ao atualizar o cadastro")
        if(results.affectedRows === 0) return res.status(404).send("Cadastro não encontrado")
        res.send("Cadastro atualizado com sucesso") 
    })
}

exports.deletarFuncionarios = (req, res) => {
    const {id} = req.params

    conexao.query("DELETE FROM funcionarios WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).send("Erro ao deletar o cadastro!")
        if (results.affectedRows === 0) return res.status(404).send("Cadastro não encontado")
        res.status(200).send("Cadastro deletado com sucesso")
    })
}