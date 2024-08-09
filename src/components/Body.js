import RestaurantCard from "./RestaruantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShimmerSectionHeader } from "react-shimmer-effects";
import useRestaurantListData from "../utils/useRestaurantListData";

const Body = () => {
    const listOfRes = useRestaurantListData();
    const [filterListOfRes, setFilterListOfRes] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    
    useEffect(() => {
        setFilterListOfRes(listOfRes);
    },[listOfRes])

    return (
        filterListOfRes.length == 0 ? 
        <div>
            <ShimmerSectionHeader center />
            <ShimmerSectionHeader center />
        </div> :
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