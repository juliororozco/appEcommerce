const mongoose = require ('mongoose')
const connectionDb = async () =>{
const dotenv = require("dotenv");
console.log(process.env.MONGODB_URL);
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Conectado a Mongo DB ${mongoose.connection.host}`)
    } catch (error) {
        console.log( `error: ${error}!! no se ha podido conectar a MONGO DB`)
    }
}
module.exports = connectionDb;