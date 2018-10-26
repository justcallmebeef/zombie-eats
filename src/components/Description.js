import React from 'react';



const Description = () => {
    return (
        <div className="description">
        <div>
       <div class="row">

       <div class="col s4">
           <div class="colHeader">
                <img src={require("/Users/meredith/zombie-eats/src/zombie-brain.jpg")}></img>
               <div class="colTitle">
               Best Selection of Brains
               </div>
           </div>
           <div class="colText">
               We offer the highest quality brains you can find in Colorado.
           </div>
       </div>
       <div class="col s4">
               <div class="colHeader">
               <img src={require("/Users/meredith/zombie-eats/src/zombie-car.png")}></img>
                   <div class="colTitle">
                       Fast Delivery
                   </div>
               </div>
               <div class="colText">
               No need to hunt your own meal. We will bring brains stright to your door.
               </div>
       </div>
       <div class="col s4">
               <div class="colHeader">
               <img src={require("/Users/meredith/zombie-eats/src/zombie-money.jpg")}></img>
                   <div class="colTitle">
                       Great Deals
                   </div>
               </div>
               <div class="colText">
              We have affordable prices on your favorite human organs.
               </div>
       </div>

       </div> 
       </div>
       </div>
     )
    }


export default Description;