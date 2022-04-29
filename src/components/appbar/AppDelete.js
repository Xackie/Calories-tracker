import React from 'react'
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



const AppDelete=({meals,alldeletehandler})=>{
  // console.log("meals in app delete", meals);
  const useStyles = makeStyles({
    button: {
    backgroundColor:"darkred",
    color:"darkblack",
    height:27,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    float:"right",
    }
  });

  const classes = useStyles();

  return ( 
    <div className='btn-delete-all'>
    <Button className={classes.button} onClick={()=>alldeletehandler()}>Reset</Button>
    </div>
  )
}

export default AppDelete