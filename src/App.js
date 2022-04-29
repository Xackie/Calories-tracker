// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState, useEffect } from "react";
import "./App.css";
import AppBar from "./components/appbar/AppBar";
import AppCounter from "./components/appbar/AppCounter";
import AppDelete from "./components/appbar/AppDelete";
import ControlInputs from "./components/appcontrols/ControlInputs";
import MealItems from "./components/AppMealItems/MealItems";
import Pagination from "./components/Pagination";
import axios from "axios";

const BackendApiBaseUrl = process.env.REACT_APP_BASE_URL;
console.log(BackendApiBaseUrl);

const App = () => {
  const [meals, setmeals] = useState([]);
  const [mealname, setmealname] = useState("");
  const [calories, setcalories] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [mealsperPage] = useState(5);

  const addmealhandeler = () => {
    const oldmeal = meals ? [...meals] : [];

    const Meal = {
      mealname,
      calories,

      id: Math.floor(Math.random() * 10000),
    };

    const newmeals = oldmeal.concat(Meal);

    if (mealname === "" || calories <= 0) {
      alert("fields Cant be empty");
    } else {
      setmeals(newmeals);
      // localStorage.setItem("meals",JSON.stringify(newmeals));

      axios
        .post(`${BackendApiBaseUrl}/meals/add`, {
          mealname,
          calories,
        })
        .then(() => axios.get(`${BackendApiBaseUrl}/meals/`))
        .then((res) => setmeals(res.data));
    }
    console.log(Meal);
    setmealname("");
    setcalories(0);
  };

  const deletemealhandler = (id) => {
    const oldmeal = [...meals];
    const newmeals = oldmeal.filter((Meal) => Meal.id !== id);

    //  localStorage.setItem("meals",JSON.stringify(newmeals));
    axios
      .delete(`${BackendApiBaseUrl}/meals/${id}`)
      .then(() => axios.get(`${BackendApiBaseUrl}/meals/`))
      .then((res) => setmeals(res.data));

    console.log(newmeals);
  };

  const alldeletehandler = () => {
    meals?.map((meals) =>
      axios
        .delete(`${BackendApiBaseUrl}}/${meals._id}`)
        .then(() => axios.get(`${BackendApiBaseUrl}/meals/`))
    );

    // .then((res) => setmeals(res.data));
    setmeals([]);
    //  localStorage.setItem("meals",JSON.stringify());
  };

  useEffect(() => {
    axios
      .get(`${BackendApiBaseUrl}/meals/`)
      .then((res) => setmeals(res.data));
  }, [setmeals]);

  const total =
    meals !== null
      ? meals
          .map((Meal) => Meal.calories)
          .reduce((acc, value) => acc + +value, 0)
      : 0;
     


  //current meals
  const indexofLastmeal = currentPage * mealsperPage;
  const indexofFirstmeal = indexofLastmeal - mealsperPage;
  const currentMeals = meals.slice(indexofFirstmeal, indexofLastmeal);

  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <AppBar />
      <AppCounter total={total}  />
      <AppDelete alldeletehandler={alldeletehandler} meals={meals} />
      <ControlInputs
        addmealhandeler={addmealhandeler}
        meals={meals}
        mealname={mealname}
        calories={calories}
        setmealname={setmealname}
        setcalories={setcalories}
      />
      <div className="meals_container">
       <MealItems meals={currentMeals} deletemealhandler={deletemealhandler} />
      </div>
      <Pagination
        totalMeals={meals.length}
        mealsperPage={mealsperPage}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
