import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { res_menu } from "../utils/constants";
const ResMenu = ()=>{
    const {resId} = useParams();
    const [resMenu,setResMenu] = useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(res_menu+resId);
        const json = await data.json();
        // console.log(json);
        setResMenu(json?.data);
    }
    if(resMenu==null){
        return <Shimmer/>
    }
    console.log(resMenu);
    const {name, cuisines, costForTwoMessage} = resMenu?.cards[2]?.card?.card?.info;
    const {itemCards} = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {
                    itemCards.map(item=>{
                       return <li key={item?.card.info?.id}>{item?.card.info?.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ResMenu;