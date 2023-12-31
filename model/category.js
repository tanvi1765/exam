const mongoose = require("mongoose");
const  categorySchema= new mongoose.Schema({
    category_name:{
        type: String,
        trim:true,
    },
    category_type:{
        type: String,
        trim:true
    },
    other_type:{
        type:String,
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
    const category= mongoose.model("category", categorySchema)
    module.exports = category