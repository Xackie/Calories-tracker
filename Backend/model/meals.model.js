const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const mealSchema=new Schema({
    mealname:{
        type:String,
        isrequired:true
    },
    calories:{
        type:Number,
        isrequired:true
    },

},{timestamps:true});

const Meal=mongoose.model('Meal',mealSchema);

module.exports=Meal;