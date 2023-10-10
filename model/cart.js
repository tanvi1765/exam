const mongoose = require("mongoose");
const  cartSchema= new mongoose.Schema({
    cart_name:{
        type: String,
        trim:true,
    },
    cart_type:{
        type: String,
        trim:true
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    },
    {
        timestamps: true,
        versionKey: false,
    }
    );
    const cart= mongoose.model("cart", cartSchema)
    module.exports = cart