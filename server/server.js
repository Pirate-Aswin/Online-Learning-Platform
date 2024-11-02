const mongoose = require('mongoose');
const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//import api routes
const apiRoutes = require('./routes/api');

app.use(express.json())

//use imported Api route
app.use('/api',apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const dbURI = 'mongodb+srv://aswinabinesh04:Aswin2004@online-learning-platfor.1h37k.mongodb.net/?retryWrites=true&w=majority&appName=online-learning-platform'

mongoose.connect(dbURI, {
  
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

