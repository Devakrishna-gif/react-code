import { useEffect, useState } from "react";
import { res_menu } from "./constants";

const useResMenu=(resId)=>{
    const [resMenu, setResMenu] = useState(null)
    useEffect(()=>{
        fecthData();
    },[])
    const fecthData = async()=>{
        const data = await fetch(res_menu+resId);
        const json = await data.json();
        setResMenu(json?.data);

    }
    return resMenu;
}

export default useResMenu;