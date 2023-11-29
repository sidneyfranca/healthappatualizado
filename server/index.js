const express = require('express');
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123123",
    database: "bditens",
   
})

app.post("/favorito", (req, res) => {
    const { nome, imagem } = req.body;
    let SQL = "INSERT INTO Favorito ( nome, imagem ) VALUES (?, ?)";
    console.log(nome, imagem)
    db.query(SQL, [nome, imagem], (err, result) => {
        console.log(err);
        console.log(result);
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.get("/favoritos", (req, res) => {
    let sql = "SELECT * FROM Favorito";
    db.query(sql, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

app.delete("/item/:id_favorito", (req, res) => {
    const { id_favorito } = req.params;
    console.log("Informação: ", id_favorito)

    let SQL = "DELETE FROM Favorito WHERE (`id_favorito` = ?)"

    db.query(SQL, id_favorito, (err, result) => {
        console.log(err)
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
    })   
    
    app.post("/cadastro/paciente", (req, res) => {
        const { nome, email, senha, cpf, idade, endereco, telefone } = req.body;
        const SQL = "INSERT INTO Paciente (nome, email, senha, cpf, idade, endereco, telefone) VALUES (?, ?, ?, ?, ?, ?, ?)";
    
        db.query(SQL, [nome, email, senha, cpf, idade, endereco, telefone], (err, result) => {
            if (err) {
                console.error("Erro no cadastro:", err);
                res.status(500).send("Erro ao cadastrar. Por favor, tente novamente.");
            } else {
                console.log("Cadastro efetuado com sucesso:", result);
                res.send("Cadastro efetuado com sucesso!");
            }
        });
    });

    
    app.post("/cadastro/medico", (req, res) => {
        const { nome, email, senha, cpf, crm, especialidade, telefone } = req.body;
        const SQL = "INSERT INTO Medico (nome, email, senha, cpf, crm, especialidade, telefone) VALUES (?, ?, ?, ?, ?, ?, ?)";

        db.query(SQL, [nome, email, senha, cpf, crm, especialidade, telefone], (err, result) => {
            if (err) {
                console.error("Erro no cadastro de médico:", err);
                res.status(500).send("Erro ao cadastrar médico. Por favor, tente novamente.");
            } else {
                console.log("Cadastro de médico efetuado com sucesso:", result);
                res.send("Cadastro de médico efetuado com sucesso!");
            }
        });
    });

app.listen(3006, () => {
    console.log("rodando servidor");
});