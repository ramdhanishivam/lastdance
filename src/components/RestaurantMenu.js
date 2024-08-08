import { useEffect, useState } from "react"
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const { resid }= useParams();
    const [ menuData, setMenuData ] = useState({})
    useEffect(()=>{
        fetchMenuInfo();
    }, [])

    const fetchMenuInfo = async () => {
        const data = await fetch(MENU_URL+resid);
        const response = await data.json();
        setMenuData(response.data.cards[2].card.card.info);
    }
  return (
    <div className="menuCard" style={{backgroundImage:CDN_URL+menuData.cloudinaryImageId}}>
        <img className="logo-image" src={ CDN_URL+menuData.cloudinaryImageId} ></img>
        <h2>{menuData.name}</h2>
        <h3>{menuData.costForTwoMessage}</h3>
        <h2>{menuData.city}</h2>
    </div>
    
  )
}

export default RestaurantMenu