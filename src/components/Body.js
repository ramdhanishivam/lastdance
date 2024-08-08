import RestaurantCard from "./RestaruantCard";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [filterListOfRes, setFilterListOfRes] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(API_URL);
        const response = await data.json();
        setListOfRes(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilterListOfRes(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}} placeholder="Enter the name"></input>
                <button onClick={()=>{
                    let givenInput = searchValue;
                    const filteredList = listOfRes.filter(
                        (res) => {
                            return givenInput != "" && res.info.name.toUpperCase().includes(givenInput.toUpperCase()) == true;
                        });
                    setFilterListOfRes(filteredList);
                    if (givenInput == "") {
                        setFilterListOfRes(listOfRes)
                    }
                }}>Click to search</button>
                <button onClick={()=>{
                    const filteredList = listOfRes.filter(
                        (res) => {
                            return res.info.avgRating > 4.2
                        });
                        setFilterListOfRes(filteredList);
                }}>Top Rated Restaruants</button>
            </div>
            <div className="restaurant-list">
                {filterListOfRes.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"restaurant/"+restaurant.info.id}><RestaurantCard restaurantInfo={restaurant} ></RestaurantCard></Link>
                ))}
            </div>
        </div>
    );
}

export default Body;