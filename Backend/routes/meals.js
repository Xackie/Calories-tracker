const router=require('express').Router();
let Meal=require('../model/meals.model');
router.route('/').get((req,res)=>{
    Meal.find()
    .then(meals=>res.json(meals))
    .catch(err=>res.status(400).json('Error'+err));
});
router.route('/add').post((req,res)=>{
    var data= req.body;
    const mealname=data.mealname;
    const calories=data.calories;
    const newMeal= new Meal({
        mealname,
        calories
    })

    newMeal.save()
    .then(()=>res.json("Meal added"))
    .catch(err=>res.status(400).json('Error'+err))
});

router.route('/:id').get((req,res)=>{
    Meal.findById(req.params.id)
    .then(meals=>res.json(meals))
    .catch(err=>res.status(400).json('Error'+err));
});
router.route('/:id').delete((req,res)=>{
    Meal.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Meal deleted"))
    .catch(err=>res.status(400).json('Error'+err));
});



router.route('/update/:id').post((req,res)=>{
    Meal.findById(req.params.id)
    .then(meal=>{
        var data= req.body;
        meal.mealname=data.mealname;
        meal.calories=data.calories; 
        meal.save()
    .then(()=>res.json("Meal Updated"))
    })
    .catch(err=>res.status(400).json('Error'+err));
});
module.exports=router;