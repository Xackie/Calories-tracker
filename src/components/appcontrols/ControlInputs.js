import React, { useEffect ,useRef} from 'react'


const ControlInputs=({addmealhandeler,calories,mealname,setmealname,setcalories})=> {
const addmealsclick=()=>{
  addmealhandeler();
}

//Triggering enter key to add a meal
const handleEnter=()=> {
// console.log("Enter key is pressed");
addmealhandeler();
}
useKey("Enter",handleEnter);

function useKey(key,cb){
  const callbackRef=useRef(cb);
  useEffect(()=>{
    callbackRef.current=cb;
  });

useEffect(()=>{
  function handle(e){
    if (e.key===key){
      callbackRef.current(e);
    }
  }

  document.addEventListener("keypress",handle);
  return ()=>   document.addEventListener("keypress",handle);

},[key])
};



  return (<div className='control_inputs'>    
        
        <div><input type="text" placeholder='MealName' value={mealname}
         onChange={(e)=>setmealname(e.target.value)}
        
        /></div>
       
        <div><input type="number"placeholder='Calories'value={calories}
         onChange={(e)=>setcalories(e.target.value)}
         min={0}
        
        /></div> 

       <button onClick={addmealsclick}  onKeyPress={(e) => e.key === 'Enter' && handleEnter()}>Add Meal</button> 
        
        </div>

  )
  
}

export default ControlInputs