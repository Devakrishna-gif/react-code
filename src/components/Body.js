import { useState } from "react";
import ResCards from "./ResCards";
import resLists from "../utils/mockData";


const Body  = ()=>{ 
    // let arr = useState(resLists);
    // let [listOfRest,setListOfRest] = arr;


    // Array Destructuring
    let [listOfRest, setListOfRest] = useState(resLists)

    return (
      <div className="res-container">
        <h1 className="res-container-heading">Resturants with online food delivery in Hyderabad</h1>
        <div className="res-filters-container">
          <button className="res-filter res-filter-rating" onClick={()=>{
           let updatedList =  resLists.filter(resList=>{
              if(resList.info.avgRating>4) {
                return resList
              }
            })
            setListOfRest(updatedList);
          }}>Ratings 4.0+</button>
          <button className="res-filter res-filter-fastDelivery">Fast Delivery</button>
          <button className="res-filter res-filter-newOnSwiggy">New On Swiggy</button>
          <button className="res-filter res-filter-pureVeg">Pure Veg</button>
          <button className="res-filter res-filter-offers">Offers</button>
          <button className="res-filter res-filter-amountRange">Rs. 300-Rs. 600</button>
          <button className="res-filter res-filter-lessAmount">Less than Rs. 300</button>
        </div>
        <div className="res-cards">
          {
            listOfRest.map(resList=> <ResCards key={resList.info.id} resData={resList}/>)
          }
        </div>
      </div>
    )
  }

export default Body;