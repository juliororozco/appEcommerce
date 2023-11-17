const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  { 
    name: { type: String, required: [true, "Es requerido este campo"] },
    category: { type: String, required: [true, "Es requerido este campo"] },
    imageUrl: { type: [String], required: [true, "Es requerido este campo"] },
    reference: { type: String, required: [true, "Es requerido este campo"] },
    price: { type: Number, required: [true, "Es requerido este campo"] },
    oldPrice: { type: Number, required: [true, "Es requerido este campo"] },
    description: { type: String, required: [true, "Es requerido este campo"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
