import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenuInfo from "../utils/useRestaurantMenuInfo";
import { ShimmerSectionHeader } from "react-shimmer-effects";

const RestaurantMenu = () => {
  const { resid }= useParams();
  const menuData = useRestaurantMenuInfo(resid);
  return (
    menuData ? <div className="m-10 p-2 w-[500px] border-2 flex flex-wrap align-baseline">
        <img alt={menuData.name + "image"} className="m-5 w-[400px] h-[400px] rounded-2xl" src={ CDN_URL+menuData.cloudinaryImageId} ></img>
        <h2 className="m-5 font-bold">{menuData.name}</h2>
        <h3 className="m-5 font-bold">{menuData.costForTwoMessage}</h3>
        <h2 className="m-5 font-bold">{menuData.city}</h2>
    </div> : 
    <div>
      <ShimmerSectionHeader center />
      <ShimmerSectionHeader center />
      <ShimmerSectionHeader center />
      <ShimmerSectionHeader center />
    </div>
  )
}

export default RestaurantMenu