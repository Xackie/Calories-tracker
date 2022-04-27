import React, { useEffect ,useRef} from 'react'
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const ControlInputs=({addmealhandeler,calories,mealname,setmealname,setcalories})=> {
const addmealsclick=()=>{
  addmealhandeler();
}
const useStyles = makeStyles({
  card: {
    // boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    justifyContent:"center",
    // backgroundColor:"lightgrey",
    marginTop: "7%"
    
   
  },
  cardcontent:{
    // backgroundColor: "ghostwhite",
    color:"black",
    display:"flex",
    flexDirection: "column",
    // boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
  },
  // cardcontent input: { 
  //   justifyContent: "space-around",
  //   width: "28%",
  //   height: "4vh",
  //   marginTop: "1%",
  //   paddingTop: "0vh",
  //   fontSize: "15px",
  //   borderRadius: "4px"
  // },
  button:{
    marginBottom:"3vh",
    backgroundColor:"darkgreen",
    color:"darkblack",
    height:30,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
  },
  input1:{
    height:"4vh",
    width:"20%",
    fontSize: "15px",
    borderRadius: "6px",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    backgroundColor: "rgb(222, 229, 229)"

  },
  input2:{
    height:"4vh",
    width:"20%",
    fontSize: "15px",
    borderRadius: "6px",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    backgroundColor: "rgb(222, 229, 229)"

  }
});

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

const classes = useStyles();

  return (<Card className={classes.card}>    
  
        <CardContent className={classes.cardcontent}>
        <CardContent>
          <input className={classes.input1}type="text" placeholder='MealName' value={mealname}
          onChange={(e)=>setmealname(e.target.value)}/></CardContent>
         <CardContent>
         <input className={classes.input2} type="number"placeholder='Calories'value={calories}
         onChange={(e)=>setcalories(e.target.value)}
         min={0}
        />
        </CardContent>

        </CardContent>
       
                <Button className={classes.button} onClick={addmealsclick}  onKeyPress={(e) => e.key === 'Enter' && handleEnter()}>Add Meal</Button> 


        </Card>
       
  )
  
}

export default ControlInputs