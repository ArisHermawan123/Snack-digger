const ProductRoutes = require("express").Router();
const ContollerProduct = require("../model.product/controller.product");

ProductRoutes.get("/product", ContollerProduct.product);

module.exports = ProductRoutes;
