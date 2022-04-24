 
import React from 'react'

const MealItems=({meals,deletemealhandler})=> {
  return (
    <div className='meal_item_wrapper'>
        {meals?.map((Meal,index)=> (
        <div key= {index} className='meal_item_wrapper_list'>

           <div>{`${Meal.mealname} : ${Meal.calories}`}</div>

            <div><button className='btn_delete'  onClick={()=>deletemealhandler(Meal._id)}>Delete</button></div>
            
        </div>
        ))}
        
        </div> 
  ) 
}

export default MealItems