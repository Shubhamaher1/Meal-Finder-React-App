import React from 'react'

function Image(props){
  // console.log(props.ele)
  return (
    
    
    // <h1>this is linked</h1>
    
    <div className="itm">
        <img src={props.ele.strMealThumb} alt=""></img>
        <div className="flex-contsiner">
            <h1 className="title">{props.ele.strMeal}</h1>
            <a className="view-btn" href={props.ele.strSource} target="_blank">View Recipe</a>
        </div>
        
    </div>
   
                 
    
  )
}

export default Image;