// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React,{useState,useEffect} from 'react'
import './App.css';
import AppBar from './components/appbar/AppBar'
import AppCounter from './components/appbar/AppCounter'
import AppDelete from './components/appbar/AppDelete'
import ControlInputs from './components/appcontrols/ControlInputs'
import MealItems from './components/AppMealItems/MealItems';
import Pagination from './components/Pagination';
import axios from 'axios';

const App=()=> {
  const [meals, setmeals] = useState([]);
  const [mealname, setmealname] = useState("");
  const [calories, setcalories] = useState(0);
  const [currentPage,setcurrentPage]=useState(1)
  const [mealsperPage]=useState(5);

  
const addmealhandeler=()=>{
 
const oldmeal=meals?[...meals]:[]; 

const Meal={
  mealname,
  calories,

  id:Math.floor(Math.random() * 10000)
};

const newmeals=oldmeal.concat(Meal);

  if (mealname===""|| calories<=0) {
    alert("fields Cant be empty") 
  }
  else{
    setmeals(newmeals);
    // localStorage.setItem("meals",JSON.stringify(newmeals));

    axios.post('https://kalorietracker.herokuapp.com//meals/add',{mealname,calories}).then(()=>
    axios.get("https://kalorietracker.herokuapp.com//meals/"))
    .then((res) => setmeals(res.data))
      };
  console.log(Meal);
  setmealname("");
setcalories(0);
}


const deletemealhandler=(id)=>{
   const oldmeal=[...meals];
   const newmeals=oldmeal.filter((Meal)=>Meal.id !== id);
  
//  localStorage.setItem("meals",JSON.stringify(newmeals));
  axios.delete(`https://kalorietracker.herokuapp.com//meals/${id}`).then(()=>
 axios.get("https://kalorietracker.herokuapp.com//meals/"))
  .then((res) => setmeals(res.data))
  

console.log(newmeals)

  };

const alldeletehandler=()=>{   
  meals?.map((meals)=> (
  axios.delete(`https://kalorietracker.herokuapp.com//meals/${meals._id}`)).then(()=>axios.get("https://kalorietracker.herokuapp.com//meals/"))
  )
  
  // .then((res) => setmeals(res.data));
setmeals([]);
 //  localStorage.setItem("meals",JSON.stringify());
}

useEffect(() => {
  axios
    .get("https://kalorietracker.herokuapp.com//meals/")
    .then((res) => setmeals(res.data));
    
}, [setmeals]);


const total= meals!==null?meals.map((Meal)=>Meal.calories).reduce((acc,value)=>acc +  +value,0):0;
// if(total>25){
//   alert("you are done for the day")
// }
//current meals
const indexofLastmeal=currentPage*mealsperPage;
const indexofFirstmeal=indexofLastmeal-mealsperPage;
const currentMeals=meals.slice(indexofFirstmeal,indexofLastmeal);
const paginate=(pageNumber)=>{
  setcurrentPage(pageNumber);
}

// const onNext=(currentPage)=>{
//   setcurrentPage(currentPage+1)
// }
// const onPrev=(currentPage)=>{
//   setcurrentPage(currentPage-1)
// }


  return (
      <div className="App">
        <AppBar />
        <AppCounter total={total}/>
        <AppDelete alldeletehandler={alldeletehandler} meals={meals}/>
        <ControlInputs 
        addmealhandeler={addmealhandeler}
        meals={meals}
        mealname={mealname}
        calories={calories}
        setmealname={setmealname}
        setcalories={setcalories}
        /> 
        <div className='meals_container'>
        <MealItems 
        meals={currentMeals} deletemealhandler={deletemealhandler} 
        />
        </div>   
        <Pagination totalMeals={meals.length} mealsperPage={mealsperPage}
         paginate={paginate} 
         
         
         />   
    </div>
  );
}

export default App;
