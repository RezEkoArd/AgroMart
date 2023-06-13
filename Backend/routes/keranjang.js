const router = require('express').Router()
const Cart = require('../Model/Cart')
const Product = require('../Model/Product')
// const {verifyToken,verifyTokenAndAuthorization} = require('./verifyToken')

// Add Cart
router.post('/',async (req,res) => {
    const newCartData = req.body
    try {
        const newCart = new Cart(newCartData); // Membuat instance objek Cart dari data yang diterima
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

// Update Cart
router.put('/:id', async (req,res) => {
    try {
        const updateCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new: true}
        );
        res.status(201).json(updateCart)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

// Delete Cart

router.delete("/:id", async (req,res) => {
    try {
        const deleteCart = await Cart.findByIdAndDelete(req.params.id)
        res.status(500).json({
            deleteCart, message: "Cart Has been Delete"
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
})

// Get Cart All User
router.get('/:id', async (req,res) => {
  
    try {
        const allCart = await Cart.find({userId : req.params.id})
        res.status(200).json(allCart)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

// Get Price Total 
router.get('/user/:id', async (req,res) => {
    try {
        const sumPriceCart = await Cart.aggregate([
          {
            $match: {userId: req.params.id}
          },
          {
            $unwind: '$products'
          },
          {
            $lookup: {
              from: 'products',
              localField: 'products.productId',
              foreignField: '_id',
              as: 'product'
            }
          },
          {
            $unwind: '$product'
          },
          {
            $group: {
              _id: '$userId',
              username: { $first: '$username' }, // Menggunakan $first untuk mengambil nilai username yang pertama
              totalQuantity: { $sum: '$products.quantity' },
              totalPrice: { $sum: { $multiply: ['$products.quantity', '$product.price'] } }
            }
          },
          {
            $project: {
              _id: 0,
              userId: '$_id',
              totalQuantity: 1,
              totalPrice: 1,
              username: 1
            }
          }
        ])
        res.status(200).json(sumPriceCart)
    } catch (error) {
        res.status(500).json(error.message)
    }
})


module.exports = router