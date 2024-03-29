const mongoose=require('mongoose');
const PostSchema=mongoose.Schema({
    iD:{
        type: String,
        required:true
    },
    
    firstName:{
        type: String,
        required:true
    },
    
    secondName:{
        type:String,
        required:true
    },
    
    email:
    {
        type: String,
        required:true
    },
        phoneNumber: {
            type: Number,
            required: true
        }

});

module.exports=mongoose.model('schemaModel',PostSchema)