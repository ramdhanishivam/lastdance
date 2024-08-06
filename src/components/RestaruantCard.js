import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#fff8dc4a"

}

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = props.restaurantInfo.info;
    return (
        <div className="restaurant-card" style={styleCard}>
            <h3>{name}</h3>
            <img className="logo-image" src={ CDN_URL + cloudinaryImageId} ></img>
            <p>{cuisines.join(",")}</p>
            <p>{avgRating} stars</p>
            <p>{costForTwo}</p>
        </div>
    );
}

export default RestaurantCard;