import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenuInfo from "../utils/useRestaurantMenuInfo";
import { ShimmerSectionHeader } from "react-shimmer-effects";

const RestaurantMenu = () => {
  const { resid }= useParams();
  const menuData = useRestaurantMenuInfo(resid);
  return (
    menuData ? <div className="menuCard">
        <img alt={menuData.name + "image"} className="logo-image" src={ CDN_URL+menuData.cloudinaryImageId} ></img>
        <h2>{menuData.name}</h2>
        <h3>{menuData.costForTwoMessage}</h3>
        <h2>{menuData.city}</h2>
    </div> : <ShimmerSectionHeader center />
  )
}

export default RestaurantMenu