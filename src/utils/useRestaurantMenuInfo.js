import { useEffect, useState } from "react"
import { MENU_URL } from "./constants"

const useRestaurantMenuInfo = (resid) => {
    // fetch restaurant menu info
    const [menuData, setMenuData] = useState(null);
    useEffect(() => {
        fetchMenuInfo();
    }, [])

    const fetchMenuInfo = async () => {
        const data = await fetch(MENU_URL+resid);
        const response = await data.json();
        setMenuData(response.data.cards[2].card.card.info);
    }

    return menuData;
}

export default useRestaurantMenuInfo;