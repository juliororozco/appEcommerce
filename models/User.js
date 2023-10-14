const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: [true, "es requerido este campo"] },
    email: { type: String, require: [true, "es requerido este campo"] },
    password: { type: String, require: [true, "es requerido este campo"] },
    department: { type: String, require: [true, ], default: "Cesar"},
    city: { type: String, require: [true], default:"Valledupar" },
    direction: {type: String, require: [true]}
    },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
