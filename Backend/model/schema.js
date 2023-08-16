const mongoose = require('mongoose');


const Schema = mongoose.Schema;

exports.productSchema = new Schema({
        id:Number,
        title:{
            type: String,
            required: true, 
            unique : true
          },
        description:String,
        price:Number,
        discountPercentage: Number,
        rating: Number,
        stock: Number,
        brand:String,
        category:String,
        thumbnail:String,
        images:[String],
        

});

exports.userDataSchema = new Schema({
      firstName:String,
      lastName:String,
      userName:{type:String,required:true, unique:true},
      email:String,
      password:String

});

