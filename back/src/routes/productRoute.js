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
  const limit = req.query.limit ? Number(req.query.limit) : 20;
  const skip = req.query.skip ? Number(req.query.skip) : 0;
  const sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  const order = req.query.order ? req.query.order : "desc";
  const search = req.query.searchForm;

  let findArgs = {};

  for (let key in req.query.filters) {
    if (req.query.filters[key].length > 0) {
      findArgs[key] = req.query.filters[key];
    }
  }

  if (search) {
    findArgs["$text"] = {$search: search};
  }

  try {
    const products = await Product.find(findArgs)
      .sort([[sortBy, order]])
      // .sort({_id:-1})
      .skip(skip)
      .limit(limit);
    const productsTotal = await Product.countDocuments(findArgs);
    const hasMore = skip + limit < productsTotal ? true : false;
    return res.status(200).send({products, hasMore});
  } catch (error) {
    console.log(error);
  }
});

module.exports = productRouter;
