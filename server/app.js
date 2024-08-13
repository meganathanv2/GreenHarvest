const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes');
const cartRoutes = require('./Routes/cartRoutes');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Meganathan:Meganathan2005@cluster0.pxyjfnm.mongodb.net/GreenHarvest?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log('Connected to MongoDB')).catch(err => console.log(err));

app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/cart', cartRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

