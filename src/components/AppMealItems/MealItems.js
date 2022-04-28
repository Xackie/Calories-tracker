import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from 'react'
import { Button } from "@material-ui/core";
const MealItems=({meals,deletemealhandler})=> {
  const useStyles = makeStyles({
    card: {
      display: "flex",
      flexDirection: "column",
      gap: "5px !important",
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      justifyContent:"center",
      backgroundColor:"lightgrey",
      marginTop:"2%"
  },
  cardcontent:{
    backgroundColor: "ghostwhite",
    color:"black",
    display: "block",
    
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",

  },
  button:{
    backgroundColor:"darkred",
    color:"darkblack",
    height:23,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    float:"right",
    marginLeft:"2vh"
  }
  });
  const classes = useStyles();

  return (
    <Card className={classes.card}
        
      >
        {meals?.map((Meal,index)=> (
        <CardContent key= {index} className={classes.cardcontent}>

           {`${Meal.mealname} : ${Meal.calories}`}

           <Button   className={classes.button} onClick={()=>deletemealhandler(Meal._id)}>Delete</Button> 
                    
        </CardContent>

        ))}

    </Card>
       
  ) 
}

export default MealItems