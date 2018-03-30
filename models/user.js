var mongoose=require('mongoose');

var userSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email: {type:String, required:true},
    password: {type:Number, required:true}
});

var users=mongoose.model('users',userSchema);

module.exports={
    Users:users
}
// module.exports=mongoose.model('Product',productSchema);