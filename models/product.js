var mongoose=require('mongoose');

var productSchema= mongoose.Schema({
    _id:mongoose.SchemaTypes.ObjectId,
    name:String,
    price:Number
});

module.exports=mongoose.model('Product',productSchema);