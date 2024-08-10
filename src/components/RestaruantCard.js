import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#fff8dc4a"
}

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = props.restaurantInfo.info;
    const threeCuisines = cuisines.slice(0,3);
    return (
        <div className="m-10 p-2 w-96 border-2 flex flex-col align-baseline" style={styleCard}>
            <img className="m-5 w-2/3 h-[200px] rounded-sm" src={ CDN_URL + cloudinaryImageId} ></img>
            <h3 className="m-5 font-bold">{name}</h3>
            <p className="m-2">{threeCuisines.join(", ")}</p>
            <p className="m-2">{avgRating} stars</p>
            <p className="m-2">{costForTwo}</p>
        </div>
    );
}

export default RestaurantCard;