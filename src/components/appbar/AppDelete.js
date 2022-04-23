import React from 'react'



const AppDelete=({meals,alldeletehandler})=>{
  // console.log("meals in app delete", meals);
  return ( 
    <div className='btn-delete-all'>
    <button className='btn--btn-delete-all' onClick={()=>alldeletehandler()}>Reset</button>
    </div>
  )
}

export default AppDelete