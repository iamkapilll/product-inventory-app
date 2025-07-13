// seeds.js
const mongoose = require('mongoose');

const Product = require('./models/product'); // Import the Product model    

// Connection URL (adjust as needed)
const uri = 'mongodb://127.0.0.1:27017/farmStand';

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
    console.log('Yes, Connected to MongoDB');
  })
  .catch(err => {
    console.error('Oh no, Connection error:', err);
  });

//   const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
//     });
//     p.save().then((p) => {
//         console.log(p);
//     }).catch(err => {
//         console.log(err);
//     });
    

const seedProducts = [
    {
      name: 'Ruby Grapefruit',
      price: 1.99,
      category: 'fruit'
    },
    {
      name: 'Organic Apple',
      price: 0.99,
      category: 'fruit'
    },
    {
      name: 'Carrot',
      price: 0.49,
      category: 'vegetable'
    },
    {
      name: 'Broccoli',
      price: 1.29,
      category: 'vegetable'
    },
    {
      name: 'Whole Milk',
      price: 2.99,
      category: 'dairy'
    },
    {
      name: 'Cheddar Cheese',
      price: 3.99,
      category: 'dairy'
    }
  ];

  Product.insertMany(seedProducts)
  .then(res => {
    console.log('Data inserted successfully!');
    console.log(res);
    // mongoose.connection.close(); // close connection after insert
  })
  .catch(err => {
    console.log('Error inserting data:', err);
  });
    

    