const {default: mongoose} = require("mongoose");

const ImageSchema = mongoose.Schema({
  key: {type: String},
  originalFileName: {type: String},
});
const image = mongoose.model("image", ImageSchema);

module.exports = image;
