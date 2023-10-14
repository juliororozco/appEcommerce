const express = require('express');
const app = express();
const dotenv = require("dotenv");
const connectionDb = require("./connectionDb");
const productRoute = require('./routes/products');
const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const orderRoute=require('./routes/orders');
const cartRoute = require('./routes/cart')
const port = 3000
dotenv.config();

app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({limit:'10mb', extended:true}));
app.use('/api/products',productRoute);
app.use('/api/',authRoute);
app.use('/api/orders',orderRoute)
app.use('/api/cart',cartRoute);
app.use('/api/users',userRoute);


app.listen( process.env.PORT || port, () => console.log(`sevidor corriendo en el puerto ${process.env.PORT}`));
connectionDb();