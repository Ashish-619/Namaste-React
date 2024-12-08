import React from "react";
import star from "../../Chapter04-Talk is cheap show me the code/img/star.png";
import price from "../../Chapter04-Talk is cheap show me the code/img/money.png";
import map from "../../Chapter04-Talk is cheap show me the code/img/map.png";
import cuisine from "../../Chapter04-Talk is cheap show me the code/img/cuisine.png";
import "../../Chapter07-Finding the path/App.css";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    lastMileTravelString,
    costForTwo,
    avgRating }) => {
    return (
        <div className="card">
            <img src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + cloudinaryImageId} className="card-img" />
            <h4>{name}</h4>
            <div className="costForTwo">
                <div className="cuisine">
                    <img src={cuisine} alt="cuisine" className="cuisine-img" />
                    <p>{cuisines?.join(", ")}</p>
                </div>
                <div className="map">
                    <img src={map} alt="map" className="map-img" />
                    <p>{lastMileTravelString} -</p>
                    <p>{areaName}</p>
                </div>
                <div className="price">
                    <img src={price} alt="price" className="price-img" />
                    <p>{costForTwo}</p>
                </div>
            </div>
            <div className="rating">
                <img src={star} alt="ratings" className="rating-img" />
                <p>{avgRating}</p>
            </div>
        </div >
    )
}

export default RestaurantCard;