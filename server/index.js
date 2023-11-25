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

app.listen(3001, () => {
    console.log("rodando servidor");
});