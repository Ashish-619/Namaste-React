import React, { useState } from "react";
import { RestaurantList } from "../utils/RestaurantList";
import RestaurantCard from "./RestaurantCard";
import "../../Chapter04-Talk is cheap show me the code/App.css";
import RestaurantMenu from "../../Chapter07-Finding the path/components/RestaurantMenu";

const Searchbar = ({ text, setText, setFilteredRestaurants }) => {

    const handleClick = () => {
        const changedText = RestaurantList.filter((res) => res.data.name.toLowerCase().includes(text.trim().toLowerCase()));
        setFilteredRestaurants(changedText);
    }

    return (
        <>
            <div className="searchbar">
                <input type="search" placeholder="Search Restaurants..." className="searchbar-box" value={text} onChange={(e) => setText(e.target.value)} />
                <button className="search-btn" onClick={handleClick}>Search</button>
            </div>
        </>
    )
}

const Body = () => {

    const [text, setText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState(RestaurantList);

    return (
        <>
            <Searchbar
                text={text}
                setText={setText}
                setFilteredRestaurants={setFilteredRestaurants} />
            <div className="restaurant-list">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} {...restaurant.data} />
                    ))
                ) : (
                    <p className="no-restaurant">No restaurants found.</p>
                )}
               
            </div>
        </>
    )
}

export default Body;