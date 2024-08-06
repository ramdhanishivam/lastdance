import RestaurantCard from "./RestaruantCard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const response = await data.json();
        setListOfRes(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
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