const {default: mongoose} = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    maxLength: 30,
  },
  description: String,
  price: {
    type: Number,
    default: 0,
  },
  images: {
    type: Array,
    default: [],
  },
  sold: {
    type: Number,
    default: 0,
  },
  continents: {
    type: Number,
    default: 1,
  },
  views: {
    type: Number,
    default: 0,
  },
});
const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
