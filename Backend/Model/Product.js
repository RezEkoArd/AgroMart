const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        title: 
        {
            type: String,
            required: true
        },
        desc: 
        {
            type: String,
            required: true
        },
        img: 
        {
            type: String,
            required: true
        },
        categories:
        {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            max: 5,
            min:1,
            default: 3
        },
        price: 
        {
            type: Number,
            required: true
        }

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Product",ProductSchema);