import { useEffect, useState } from "react";
import ResCards from "./ResCards";
import Shimmer from "./Shimmer";
import FilterButtons from "./FilterButtons";
import Cuisines from "./Cuisines";
import TopRestaurants from "./TopRestaurants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body  = ()=>{ 
    // let arr = useState(resLists);
    // let [listOfRest,setListOfRest] = arr;


    // Array Destructuring
    let [listOfRest, setListOfRest] = useState([]);
    let [filteredRest, setFilteredRest] = useState([]);
    let [listOfFIlters, setListOfFilters] = useState([]);
    let [listOfRestHeading, setListOfRestHeading] = useState([]);
    let [listOfCuisines, setListOfCuisines] = useState([]);
    let [lisOfTopRes, setListOfTopRes] = useState([]);

    useEffect(()=>{
      fetchData();
    }, [])

    let fetchData = async ()=>{
      let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      let json = await data.json();
      setListOfRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfFilters(json?.data?.cards[3]?.card?.card?.facetList);
      setListOfRestHeading(json?.data?.cards[2]?.card?.card.title);
      setListOfCuisines(json?.data?.cards[0]?.card?.card);
      setListOfTopRes(json?.data?.cards[1]?.card?.card);
    }

    const toggleFilter = () => {
      if (filteredRest.length !== listOfRest.length) {
        setFilteredRest(listOfRest);
      } else {
        const updatedList = listOfRest.filter(resList => resList.info.avgRating > 4);
        setFilteredRest(updatedList);
      }
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus ===  false){
      return <h1>Looks like you're offline! please check your connectivity</h1>
    }


    
    return listOfRest.length === 0?<Shimmer />: (
      <div className="res-container">
        <Cuisines cuisinesData={listOfCuisines}/>
        <hr></hr>
        <TopRestaurants topResList={lisOfTopRes}/>
        <hr></hr>
        <h1 className="res-container-heading">{listOfRestHeading}</h1>
        <FilterButtons filters={listOfFIlters} onRatingClick={toggleFilter}/>
        <div className="res-cards">
          {
            filteredRest.map(resList=> <Link key={resList.info.id} to={"/restaurants/"+resList.info.id}><ResCards resData={resList}/></Link>)
          }
        </div>
      </div>
    )
  }

export default Body;