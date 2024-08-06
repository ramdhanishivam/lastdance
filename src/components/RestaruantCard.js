import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#fff8dc4a"
}

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = props.restaurantInfo.info;
    const threeCuisines = cuisines.slice(0,3);
    return (
        <div className="restaurant-card" style={styleCard}>
            <img className="logo-image" src={ CDN_URL + cloudinaryImageId} ></img>
            <h3>{name}</h3>
            <p>{threeCuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p>{costForTwo}</p>
        </div>
    );
}

export default RestaurantCard;