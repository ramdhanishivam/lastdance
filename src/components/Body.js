import RestaurantCard from "./RestaruantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShimmerSectionHeader } from "react-shimmer-effects";
import useRestaurantListData from "../utils/useRestaurantListData";
import useInternetStatus from "../utils/useInternetStatus";

const Body = () => {
    const listOfRes = useRestaurantListData();
    const [filterListOfRes, setFilterListOfRes] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const internetStatus = useInternetStatus();
    
    useEffect(() => {
        setFilterListOfRes(listOfRes);
    },[listOfRes])

    if(internetStatus === false){
        return <h3>No Internet</h3>;
    }

    return (
        filterListOfRes.length == 0 ? 
        <div>
            <ShimmerSectionHeader center />
            <ShimmerSectionHeader center />
            <ShimmerSectionHeader center />
            <ShimmerSectionHeader center />
        </div> :
        <div className="font-extralight">
            <div className="flex justify-between">
                <input className="p-3 m-3 border-2 w-96" type="text" value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}} placeholder="Enter the name"></input>
                <button className="p-3 m-3 border-2 w-96 bg-slate-50" onClick={()=>{
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
                <button className="p-3 m-3 border-2 w-96 bg-slate-50" onClick={()=>{
                    const filteredList = listOfRes.filter(
                        (res) => {
                            return res.info.avgRating > 4.2
                        });
                        setFilterListOfRes(filteredList);
                }}>Top Rated Restaruants</button>
            </div>
            <div className="flex flex-wrap">
                {filterListOfRes.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"restaurant/"+restaurant.info.id}><RestaurantCard restaurantInfo={restaurant} ></RestaurantCard></Link>
                ))}
            </div>
        </div>
    );
}

export default Body;