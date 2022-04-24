import React from 'react'

const Pagination=({mealsperPage,totalMeals,paginate})=> {
    

const pageNumbers=[];
for(let i=1 ;i<=Math.ceil(totalMeals/mealsperPage);i++){
    pageNumbers.push(i);
}



  return (
    <div>
        
        <ul className='paginate' >
            
    
      

            {pageNumbers.map(pageNumber=>(
            <li key={pageNumber} className="pagination-items">
              <a onClick={()=>paginate(pageNumber)} href="!#" className="pagin-link">
              {pageNumber} 
              </a>
            </li>
            ))}
        
            </ul>
        
    </div>
  )
}

export default Pagination