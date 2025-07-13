//index.js
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override'); // Middleware to support HTTP verbs such as PUT or DELETE in places where the client doesn't support it



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


  app.set('view engine', 'ejs');  
  app.set('views', path.join(__dirname, 'views'));

  app.use(express.urlencoded({ extended: true })); // for parsing form data
  app.use(methodOverride('_method')); // for supporting HTTP verbs such as PUT or DELETE in places where the client doesn't support it




const categories = ['fruit', 'vegetable', 'dairy','meat']; // this is just a placeholder for the categories. you can replace it with your own data and can add new data and can be use full for dropdowns in forms as to make select options using ejs loops dynamically



app.get('/', (req, res) => {
  res.render('products/home');
});



//list all products
app.get('/products', async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render("products/index", { products, category});
  } else {
    const products = await Product.find({});
    res.render("products/index", { products, category: "All"});
  }
});

  
  
   



    


    // Show form to create new product
app.get('/products/new', (req, res) => { //this is the route to render the FORM for creating a new product
    res.render('products/new', { categories }); // render the new product form and pass the categories array to it
    // res.send('New product form'); // this is just a placeholder response
    });
 // Handle form submission (create)
app.post('/products', async (req, res) => { //this is the route to handle form submission. this is where we create a new product
    const newProduct = new Product(req.body); // this creates a new instance of the Product model with the data from the form as an object
    await newProduct.save();
    console.log(newProduct);
    // res.send('New product created!'); // this is just a placeholder response
    res.redirect(`/products/${newProduct._id}`); // redirect to the new product's show page
    });





    // Show one product
    app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
    });





// Show form to edit product
    app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
    });
 // Handle form submission (update)
    app.put('/products/:id', async (req, res) => { // this is the route to handle form submission for editing a product
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    console.log(product);
    res.redirect(`/products/${product._id}`); // redirect to the updated product's show page
    });






// Delete a product
    app.delete('/products/:id', async (req, res) => { // this is the route to handle deleting a product
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products'); // redirect to the products index page
    });

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});













//just to remember how to use req.params, req.query, and req.body in Express.js:

// | What         | Where it comes from         | Example URL/request                   |
// | ------------ | --------------------------- | ------------------------------------- |
// | `req.params` | URL path parameters         | `/products/:id` → `/products/123`     |
// | `req.query`  | Query string                | `/products?category=Fruit&sort=price` |
// | `req.body`   | The request body (POST/PUT) | Form data or JSON in the request body |
