import RestaurantCard from "./RestaruantCard";
import { resList } from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder="Enter the name"></input>
                <button>Click to search</button>
            </div>
            <div className="restaurant-list">
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restaurantInfo={restaurant} ></RestaurantCard>
                ))}
            </div>
        </div>
    );
}

export default Body;