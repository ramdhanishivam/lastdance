import { useEffect, useState } from "react";
import { API_URL } from "./constants";

const useRestaurantListData = () => {
    const [listOfRes, setListOfRes] = useState([]);
    useEffect(() => {
        fetchRestaurantListData();
    }, [])

    const fetchRestaurantListData = async () => {
        const data = await fetch(API_URL);
        const response = await data.json();
        setListOfRes(response.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return listOfRes;
}

export default useRestaurantListData;