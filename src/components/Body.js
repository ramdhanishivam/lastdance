import RestaurantCard from "./RestaruantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRes, setListOfRes] = useState(resList);
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder="Enter the name"></input>
                <button>Click to search</button>
                <button onClick={()=>{
                    const filteredList = listOfRes.filter(
                        (res) => {
                            return res.info.avgRating > 4.5
                        });
                    setListOfRes(filteredList);
                }}>Top Rated Restaruants</button>
            </div>
            <div className="restaurant-list">
                {listOfRes.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restaurantInfo={restaurant} ></RestaurantCard>
                ))}
            </div>
        </div>
    );
}

export default Body;