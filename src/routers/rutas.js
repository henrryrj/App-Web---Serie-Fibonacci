const express = require("express");
const { Router } = require("express");
const root = Router();
const { fibonacci } = require("../controllers/fibonacci");

root.get("/", (req, res) => {
    res.render("index");
});

root.post("/fibonacci", (req, res) => {
    const { n } = req.body;
    if (isNaN(n) || n == "" || n < 0) {
        res.json("Error!, Debe ingresar un numero valido");
    } else {
        const elemntosFibo = fibonacci(n);
        res.render('elementosFibo', { elemntosFibo });
    }
});

module.exports = root;