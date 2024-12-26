import React from "react";
import star from "../../Chapter04-Talk is cheap show me the code/img/star.png";
import price from "../../Chapter04-Talk is cheap show me the code/img/money.png";
import map from "../../Chapter04-Talk is cheap show me the code/img/map.png";
import cuisine from "../../Chapter04-Talk is cheap show me the code/img/cuisine.png";
import "../App.css";

const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    lastMileTravelString,
    costForTwo,
    avgRating }) => {
    return (
        <div className="w-64 h-[400px] rounded-lg flex-wrap bg-customYellow p-3 my-5 mx-auto hover:scale-[1.02] cursor-pointer hover:bg-customMustard">
            <img src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + cloudinaryImageId} className="card-img" />
            <h4 className="font-bold">{name}</h4>
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

//Higher order component - takes a component as input and returns newly updated component.
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-600 px-4 py-1 text-white m-4 p-2 rounded-md text-xs">Veg</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;