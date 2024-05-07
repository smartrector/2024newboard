const express = require("express");
const Product = require("../models/Product");
const productRouter = express.Router();

productRouter.post("/", async (req, res) => {
  try {
    const product = await new Product(req.body).save();
    return res.status(200).send({product});
  } catch (error) {
    console.log(error);
  }
});
productRouter.get("/", async (req, res) => {
  try {
    const products = await Product.find({}).sort({_id: -1});
    return res.status(200).send({products});
  } catch (error) {
    console.log(error);
  }
});

module.exports = productRouter;
