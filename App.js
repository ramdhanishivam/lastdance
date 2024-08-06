import React from "react";
import ReactDOM from "react-dom/client";
import "/app.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <a>
                    <img className="logo-image" src="https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg" ></img>
                </a>
            </div>
            <div className="navigation-items">
                <ul>
                    <li>About us</li>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const styleCard = {
    backgroundColor: "#fff8dc4a"

}

const resList = [
    {
    "info": {
    "id": "776558",
    "name": "Cafe Bengaluru",
    "cloudinaryImageId": "c3bc32ad3ed9515bb0bf77c419d5a429",
    "locality": "R C Dutt Road",
    "areaName": "Akota",
    "costForTwo": "₹278 for two",
    "cuisines": [
    "South Indian",
    "Beverages",
    "Sweets",
    "Thalis"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "462843",
    "avgRatingString": "4.4",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 4.7,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "4.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-06 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹75 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-b0ec0a2f-bc0a-4fb3-bdb5-b4a395926d61"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/cafe-bengaluru-r-c-dutt-road-akota-vadodara-776558",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "506517",
    "name": "Chai CupPi",
    "cloudinaryImageId": "a9a8689f8a6bb55bc4e833c2660d85c9",
    "locality": "Sayajigunj",
    "areaName": "Akota",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Fast Food",
    "Beverages"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "302983",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 2.9,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "2.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-07 02:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-b0ec0a2f-bc0a-4fb3-bdb5-b4a395926d61"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/chai-cuppi-sayajigunj-akota-vadodara-506517",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "67453",
    "name": "Jagdish Foods Pvt Ltd",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/c19c8450-9036-469e-a92b-6d5a5a4d2a64_67453.jpg",
    "locality": "VADODARA BUS TERMINAL, SAYAJIGUNJ",
    "areaName": "Sayajiganj",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Fast Food",
    "Street Food",
    "Snacks",
    "Desserts"
    ],
    "avgRating": 4.7,
    "veg": true,
    "parentId": "473018",
    "avgRatingString": "4.7",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-06 22:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Gujrati.png",
    "description": "Delivery!"
    },
    {
    "imageId": "Rxawards/_CATEGORY-Mithai.png",
    "description": "Delivery!"
    },
    {
    "imageId": "Rxawards/_CATEGORY-Snacks.png",
    "description": "Delivery!"
    },
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Gujrati.png"
    }
    },
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Mithai.png"
    }
    },
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Snacks.png"
    }
    },
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.3",
    "ratingCount": "1K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-b0ec0a2f-bc0a-4fb3-bdb5-b4a395926d61"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/jagdish-foods-pvt-ltd-bus-terminal-sayajigunj-sayajiganj-vadodara-67453",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "291999",
    "name": "Hotel Sudha",
    "cloudinaryImageId": "nig9hnmz4pmcbviyehk2",
    "locality": "Subhanpura",
    "areaName": "Subhanpura",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "South Indian",
    "Fast Food",
    "Beverages"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "102747",
    "avgRatingString": "4.6",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 5.9,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "5.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-06 14:40:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
    "description": "Delivery!"
    },
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
    }
    },
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.6",
    "ratingCount": "50+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-b0ec0a2f-bc0a-4fb3-bdb5-b4a395926d61"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/hotel-sudha-subhanpura-vadodara-291999",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "107110",
    "name": "Shree Kheteshwar Sweets",
    "cloudinaryImageId": "d270834c939d9f28f85ff93972107c8d",
    "locality": "New Ipcl Road",
    "areaName": "Subhanpura",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Sweets",
    "Snacks",
    "Gujarati"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "453814",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 6.3,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "6.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-06 22:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-b0ec0a2f-bc0a-4fb3-bdb5-b4a395926d61"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/shree-kheteshwar-sweets-new-ipcl-road-subhanpura-vadodara-107110",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "82030",
    "name": "Surya Prakash",
    "cloudinaryImageId": "fpqc9cijx4quvhlkw1df",
    "locality": "Raopura Road",
    "areaName": "Mandvi",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Chinese",
    "North Indian",
    "South Indian",
    "Biryani"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "198006",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 15,
    "lastMileTravel": 0.7,
    "serviceability": "SERVICEABLE",
    "slaString": "15-20 mins",
    "lastMileTravelString": "0.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-06 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-b0ec0a2f-bc0a-4fb3-bdb5-b4a395926d61"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/surya-prakash-raopura-road-mandvi-vadodara-82030",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "770511",
    "name": "Theobroma",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/2ba6d5af-c4b1-4dab-b7d9-ab0aab84dcfb_770511.jpg",
    "locality": "Veer Enclave",
    "areaName": "Manjhalpur",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Bakery",
    "Desserts"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "1040",
    "avgRatingString": "4.6",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 4.2,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "4.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-06 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Gourmet",
    "imageId": "newg.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-b0ec0a2f-bc0a-4fb3-bdb5-b4a395926d61"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/theobroma-veer-enclave-manjhalpur-vadodara-770511",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "71418",
    "name": "Tea Post",
    "cloudinaryImageId": "4ef8c6c6d8e5fc7de3149cef85726e77",
    "locality": "Sayajigunj",
    "areaName": "Dairy den circle",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Beverages",
    "Snacks"
    ],
    "avgRating": 4.7,
    "veg": true,
    "parentId": "4509",
    "avgRatingString": "4.7",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 2.9,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "2.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-08-06 23:45:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1695133679/badges/Pure_Veg111.png",
    "description": "pureveg"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "pureveg",
    "imageId": "v1695133679/badges/Pure_Veg111.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
    "context": "seo-data-b0ec0a2f-bc0a-4fb3-bdb5-b4a395926d61"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/tea-post-sayajigunj-dairy-den-circle-vadodara-71418",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
    ]

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = props.restaurantInfo.info;
    return (
        <div className="restaurant-card" style={styleCard}>
            <h3>{name}</h3>
            <img className="logo-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} ></img>
            <p>{cuisines.join(",")}</p>
            <p>{avgRating} stars</p>
            <p>{costForTwo}</p>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" placeholder="Enter the name"></input>
                <button>Click to search</button>
            </div>
            <div className="restaurant-list">
                {resList.map((restaurant) => (
                    <RestaurantCard restaurantInfo={restaurant} ></RestaurantCard>
                ))}
            </div>
        </div>
    );
}

const Footer = () => {
    return  (
        <div className="footer">
            <div className="footer-items">
                <ul>
                    <li>Instagram</li>
                    <li>Query Form</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
    </>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)

