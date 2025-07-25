import { RESTAURANT_MENU_API } from "./constants";

import { useEffect, useState } from "react";
const useRestaurentMenu = (resId)=>{
    const [resMenu,setResMenu] = useState(null);
    useEffect(()=>{
    getRestaurantMenu();
},[])
   const getRestaurantMenu = async ()=>{
        const data = await fetch(RESTAURANT_MENU_API + resId);;
        const json = await data.json();
        setResMenu(json);
    }
    return resMenu;
}

export default useRestaurentMenu;