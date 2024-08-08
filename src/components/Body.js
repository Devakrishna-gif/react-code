import { useEffect, useState } from "react";
import ResCards from "./ResCards";
import Shimmer from "./Shimmer";
import FilterButtons from "./FilterButtons";


const Body  = ()=>{ 
    // let arr = useState(resLists);
    // let [listOfRest,setListOfRest] = arr;


    // Array Destructuring
    let [listOfRest, setListOfRest] = useState([]);
    let [filteredRest, setFilteredRest] = useState([]);
    let [listOfFIlters, setListOfFilters] = useState([])

    useEffect(()=>{
      fetchData();
    }, [])

    let fetchData = async ()=>{
      let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      let json = await data.json();
      setListOfRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfFilters(json?.data?.cards[3]?.card?.card?.facetList);
    }

    const toggleFilter = () => {
      if (filteredRest.length !== listOfRest.length) {
        setFilteredRest(listOfRest);
      } else {
        const updatedList = listOfRest.filter(resList => resList.info.avgRating > 4);
        setFilteredRest(updatedList);
      }
    };

    
    return listOfRest.length === 0?<Shimmer />: (
      <div className="res-container">
        <h1 className="res-container-heading">Resturants with online food delivery in Hyderabad</h1>
        <FilterButtons filters={listOfFIlters} onRatingClick={toggleFilter}/>
        <div className="res-cards">
          {
            filteredRest.map(resList=> <ResCards key={resList.info.id} resData={resList}/>)
          }
        </div>
      </div>
    )
  }

export default Body;