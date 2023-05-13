require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoute');
const errorHandler = require('./middleware/errorHandler');

//Mongoose connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to mongodb Successfully"))
    .catch((err) => console.log(err));

//Routes
app.use(express.json());
app.use('/api/products', productRoutes);

//Error handling
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log("Server running");
})