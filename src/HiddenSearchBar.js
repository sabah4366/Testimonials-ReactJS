import {  useState } from "react";
import './style.css'


function HiddenSearchBar() { 

   const [indexNumber,setIndexNumber] = useState(0)
   const testimonials = [
      {
         quote:"Atomic Habits",
         author:'James clear'
      },
      {
         quote:"Ramayanam",
         author:'J J Shankar'
      },
      {
         quote:"Jude",
         author:'Rasool Pokutty'
      }
   ]
   function nextClick(){
      if (indexNumber < testimonials.length - 1){
         setIndexNumber(indexNumber + 1)
      }
   }
   function prevClick(){
      if (indexNumber > 0 && indexNumber < testimonials.length  ){
         setIndexNumber(indexNumber - 1)
      }
   }

   

    

   return (<>
      
      <div className="container-fluid">
         <div className="testimonials">
            <section>
               <h1>{testimonials[indexNumber].quote}</h1>
               <p>{testimonials[indexNumber].author}</p>
               <button className="btn clickbtn m-2" onClick={prevClick}>Prev</button>
               <button className="btn clickbtn "onClick={nextClick}>Next</button>
            </section>
         </div>
      </div>
      
   </>)
}

export default HiddenSearchBar;