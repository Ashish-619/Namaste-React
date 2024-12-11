import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import "../../Chapter07-Finding the path/App.css";
import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";

const Searchbar = ({ text, setText }) => {

    return (
        <>
            <div className="searchbar">
                <input type="search" placeholder="Search Restaurants..." className="searchbar-box" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </>
    )
}

const Body = () => {

    const [text, setText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    useEffect(() => {
        if (text.trim() !== "") {
            const data = allRestaurants.filter((res) => (
                res?.info?.name?.toLowerCase().includes(text.trim().toLowerCase())
            ))
            setFilteredRestaurants(data);
        } else {    //if searchbar is empty show all data(restaurants).
            setFilteredRestaurants(allRestaurants);
        }
    }, [text, allRestaurants]); //only renders when the text or allRestautanrts changes.

    async function getRestaurants() {
        try {
            const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            const restaurant = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (restaurant) {
                setFilteredRestaurants(restaurant);
                setAllRestaurants(restaurant);
            }
        }
        catch (error) {
            console.log("Error loading data: ", error);
        }
    }

    //console.log("setFilteredData API Response: ", filteredRestaurants)

    return (
        <>
            <Searchbar
                text={text}
                setText={setText} />
            {filteredRestaurants.length == 0 ? (<div className="card-container">
                <Shimmer />
            </div>) : (
                <div className="restaurant-list">
                    {filteredRestaurants.map((restaurant) => (
                        <div className="restaurant-card" key={restaurant.info.id}>
                            <Link to={"/restaurant/" + restaurant.info.id} style={{ textDecoration: "none" }}>
                                <RestaurantCard
                                    {...restaurant.info}
                                    lastMileTravelString={restaurant.info.sla.lastMileTravelString}
                                />
                            </Link>
                        </div>
                    ))}
                </div>

            )}
        </>
    )
}

export default Body;