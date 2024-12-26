import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import "../App.css";
import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Searchbar = ({ text, setText }) => {
    return (
        <div className="flex justify-center py-5 bg-customWhite shadow-lg">
            <input
                type="search"
                placeholder="Search Restaurants..."
                className="p-3 border w-60 h-auto rounded-lg shadow-md"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
};

const Body = () => {
    const [text, setText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const RestaurantPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        getRestaurants();
    }, []);

    useEffect(() => {
        if (text.trim() !== "") {
            const data = allRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(text.trim().toLowerCase())
            );
            setFilteredRestaurants(data);
        } else {
            // If the search bar is empty, show all data (restaurants)
            setFilteredRestaurants(allRestaurants);
        }
    }, [text, allRestaurants]); // Only renders when the text or allRestaurants changes

    async function getRestaurants() {
        try {
            const data = await fetch(
                "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            const restaurant =
                json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants;
            if (restaurant) {
                setFilteredRestaurants(restaurant);
                setAllRestaurants(restaurant);
            }
        } catch (error) {
            console.log("Error loading data: ", error);
        }
    }

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h1>No Internet Connection</h1>;
    }

    return (
        <>
            <Searchbar text={text} setText={setText} />
            {filteredRestaurants.length === 0 ? (
                <div className="card-container">
                    <Shimmer />
                </div>
            ) : (
                <div className="bg-customWhite flex justify-center px-5 flex-wrap gap-5 p-3 max-sm:flex-col max-sm:items-center">
                    {filteredRestaurants.map((restaurant) => (
                        <div key={restaurant.info.id}>
                            <Link
                                to={"/restaurant/" + restaurant.info.id}
                                style={{ textDecoration: "none" }}
                            >
                                {restaurant.info.veg ? (
                                    <RestaurantPromoted {...restaurant.info} />
                                ) : (
                                    <RestaurantCard
                                        {...restaurant.info}
                                        lastMileTravelString={
                                            restaurant.info.sla.lastMileTravelString
                                        }
                                    />
                                )}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Body;
