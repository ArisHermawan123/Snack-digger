const ProductRoutes = require("express").Router();
const ContollerProduct = require("../../controllers/model.product/controller.product");

ProductRoutes.get("/product", ContollerProduct.product);

module.exports = ProductRoutes;
