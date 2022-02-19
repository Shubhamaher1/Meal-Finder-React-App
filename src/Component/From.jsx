import React,{useEffect, useState} from 'react';
import Image from './Image';




function From() {
  const applicationId = "4774f375";
const apiKey = "25bca7af93ea45bc23449906e1739123";
  const [value , setValue]=useState("");
  const [results,setresult]=useState(null);
  const[loding , setloding]=useState(true);
  function fet(e){
    e.preventDefault();
    if(!value)return;
    async function fetchdata(){
      const resp=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
      const data= await resp.json();
      const requireddata= data.meals;
      setresult(requireddata);
    }
    fetchdata();

  }
    
  // useEffect(()=>{
     
  //    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=curry`)
  //    .then(res=>res.json())
  //    .then(data=>{
  //      setresult(data.meals)
  //      setloding(false)})},[])
  //  if(loding===false){
  //    console.log(results)
  //   return (
  //     <>
  //   <form >
  //   <input type="text" placeholder="Search Your Recipies...." value={value} onChange={(e)=>{
  //       setValue(e.target.value);}} />
  //     <ion-icon name="search" id="search-btn1">
  //       <button onClick={fet}>Search</button>
  //     </ion-icon>
    
  //    </form>
  //     <div className="search-result">{results.map(ele=>{<Image ele={ele}/>} )}</div>
  //     </>
  //   )
  //  }
        
       
        // useEffect(man(results),[])

  return (<>
    <form >
    <input type="text" placeholder="Search Your Recipies...." value={value} onChange={(e)=>{
        setValue(e.target.value);}} />
      <ion-icon name="search" id="search-btn1">
        <button onClick={fet}>Search</button>
      </ion-icon>
    
     </form>
     <div className="search-result">
     {results && results.map((ele,index)=><Image key={index} ele={ele}/> )}</div>

  
  </>
  )
}
export default From;


// const [value , setValue]=useState("");
//     const [result,setresult]=useState({});
//     const[loding , setloding]=useState(true);
//     useEffect(()=>{
//       fetch(`https://api.edamam.com/search?q=${value}&app_id=${applicationId}&app_key=${apiKey}`)
//       .then(res=>res.json())
//       .then(data=>{
//         setresult(data.hits);
//         setloding(false);
//     },[])

    // function fetchdata(e){
    //     e.preventDefault();
    //     fatchApi();
    // }
    // async function fatchApi() {
    //     const baseURL = `https://api.edamam.com/search?q=${value}&app_id=${applicationId}&app_key=${apiKey}`;
    //     const respons = await fetch(baseURL);
    //     const data = await respons.json();
    //     generatHtml(data.hits);
    //     // console.log(data);
    //   }

    //   function generatHtml(result) {
    //     let genetedHtm = "";
    //     result.map((result) => {
    //       genetedHtm = `
              // <div class="itm">
              //         <img src="${result.recipe.image}" alt="">
              //         <div class="flex-contsiner">
              //             <h1 class="title">${result.recipe.label}</h1>
              //             <a class="view-btn" href="${
              //               result.recipe.url
              //             }" target="_blank">View Recipe</a>
              //         </div>
              //         <p class="itm-data">caliri:${result.recipe.calories.toFixed(
              //           2
              //         )}</p>
              //         <p class="itm-data">Diet Label:${result.recipe.dietLabels}</p>
              //         <p class="itm-data">Helth lable:${
              //           result.recipe.healthLabels
              //         }</p>
              //     </div>
    //           `;
    //           return genetedHtm;
    //     });
    //     setresult(genetedHtm);
    // }
  
  // return (<>
  //   <form action="">
  //   <input type="text" placeholder="Search Your Recipies...." value={value} onChange={(e)=>{
  //       setValue(e.target.value);}} />
  //     <ion-icon name="search" id="search-btn1">
  //       <button onClick={fetchdata}>Search</button>
  //     </ion-icon>
    
  //    </form>

  // <div class="search-result">{result.map(img=>(<Image img ={img}/>))}</div>
  // </>
  // )
