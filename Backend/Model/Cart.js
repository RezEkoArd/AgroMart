const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
    {
        userId : {
            type: String,
            require: true
        },
        username : {
            type: String,
            require: true
        },
        products : [
            {
                productId: {
                    type : mongoose.Schema.Types.ObjectId,
                    require: true
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Cart",CartSchema);