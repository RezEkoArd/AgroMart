const router = require('express').Router()
const Product = require('../Model/Product')
//? const {verifyToken, verifyTokenAndAuthorization} = require('../routes/verifyToken')

//  ADD PRODUCT
router.post('/',async (req,res) => {
    const newProduct = new Product(req.body)

    try {
        const savedProduct = newProduct.save();
        res.status(201).json("Product has been added")
    } catch (error) {
        res.status(500).json(error.message)
    }
})

// Update Product
router.put("/:id", async (req,res) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set: req.body,
        },{ new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err){
        res.status(500).json(err)
    }
});

// Delete Product 

router.delete("/:id", async (req,res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    }catch(err) {
        res.status(500).json(err)
    }
});

// GET ALL PRODUCTS 

router.get("/",  async (req,res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
       
    }catch(err) {
        res.status(500).json(err)
    }
});

// Get Product by Id Detail

router.get("/find/:id",async (req,res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(product){
            return res.status(200).json(product)
        } else {
            return res.status(404).json("Product not found")
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
})

// Find Product by Title (Product Search)
router.get("/search/:title", async (req,res) => {
    try {
        const searchTitle = req.params.title;
        const products = await Product.find({ title: { $regex: searchTitle, $options: 'i' } });
        res.status(200).json(products)
      } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
    
})

module.exports = router
