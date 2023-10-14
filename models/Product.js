const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  { 
    name: { type: String, require: [true,"es requerido este campo"] },
    category: { type: String, require: [true,"es requerido este campo"] },
    imageUrl: { type:[], require: [true, "es requerido este campi"] },
    reference: { type: String, require: [true, "es requerido este campo"] },
    price: { type: Number, require: [true, "es requerido este campo"] },
    oldPrice:{ type: Number, require: [true, "es requerido este campo"] },
    description: { type: String, require: [true, "es requerido este campo"] },
  },
  { Timestamp: true }
);
module.exports = mongoose.model("Product", ProductSchema);
[]