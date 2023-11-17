const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Este campo es requerido"] },
    email: { type: String, required: [true, "Este campo es requerido"] },
    password: { type: String, required: [true, "Este campo es requerido"] },
    department: { type: String, required: [true], default: "Cesar" },
    city: { type: String, required: [true], default: "Valledupar" },
    direction: { type: String, required: [true] },
    isAdmin: { type: Boolean, default: false } // Corrección aquí
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
