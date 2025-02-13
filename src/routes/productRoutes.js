const express = require("express");
const productControllers = require('../controllers/productController');
const routes = express.Router();



// rota pra listar os produtos
routes.get("/produtos", productControllers.listar);

// Consultar um unico produto
routes.get("/produtos/:id", productControllers.listarPorId);

// Cadastrar produtos
routes.post("/novoProduto", productControllers.criar);

// Deletar produtos
routes.delete("/produtos/:id", productControllers.remover);

// Atualizar produto
routes.put("/produtos/:id", productControllers.atualizar);

module.exports = routes;
