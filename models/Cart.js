const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
userId : {type: String, require: true},
products:[{
    cartItem :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"product"
    }, 
    quantity: {type: Number, default: 1}
}]   
},{Timestamp:true});

module.exports = mongoose.model("product", cartSchema);