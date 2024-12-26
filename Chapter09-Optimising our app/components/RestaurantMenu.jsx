import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const { restaurant, menuItems } = useRestaurantMenu(resId);
    const dispatch = useDispatch();

    const handleAddItem = () => {
        //dispatch an action
        dispatch(addItem("Pizza"));
    }

    return !restaurant ? (
        <MenuShimmer />
    ) : (
        <div className="restaurant-menu">
            <div className="restaurant-summary">
                <img
                    className="restaurant-img"
                    src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + restaurant?.cloudinaryImageId}
                    alt={restaurant?.name}
                />
                <div className="restaurant-summary-details">
                    <h2 className="restaurant-title">{restaurant?.name}</h2>
                    <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
                    <div className="restaurant-details">
                        <div>{restaurant?.costForTwoMessage}</div>
                    </div>
                </div>
            </div>

            <div className="restaurant-menu-content">
                <div className="menu-items-container">
                    <div className="menu-title-wrap">
                        <h3 className="menu-title">Recommended</h3>
                        <p className="menu-count">
                            {menuItems.length} ITEMS
                        </p>
                    </div>
                    <div className="menu-items-list">
                        {menuItems.map((item) => (
                            <div className="menu-item" key={item?.id}>
                                <div className="menu-item-details">
                                    <h3 className="item-title">{item?.name}</h3>
                                    <p className="item-cost">
                                        {item?.price > 0
                                            ? new Intl.NumberFormat("en-IN", {
                                                style: "currency",
                                                currency: "INR",
                                            }).format(item?.price / 100)
                                            : " "}
                                    </p>
                                    <p className="item-desc">{item?.description}</p>
                                </div>
                                <div className="menu-img-wrapper">
                                    {item?.imageId && (
                                        <img
                                            className="menu-item-img"
                                            src={"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item?.imageId}
                                            alt={item?.name}
                                        />
                                    )}
                                    <button className="px-3 py-2 bg-gray-300 rounded-md" onClick={handleAddItem}> Add +</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;