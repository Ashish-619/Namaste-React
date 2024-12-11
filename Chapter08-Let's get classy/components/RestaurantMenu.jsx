import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6655204&lng=73.780732&restaurantId=" + resId);
            const json = await response.json();

            // Set restaurant data
            const restaurantData = json?.data?.cards?.map(x => x.card)?.
                find(x => x && x.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card?.info || null;
            setRestaurant(restaurantData);

            // Set menu
            const menuItemsData = json?.data?.cards.find(x => x.groupedCard)?.
                groupedCard?.cardGroupMap?.REGULAR?.
                cards?.map(x => x.card?.card)?.
                filter(x => x['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")?.
                map(x => x.itemCards).flat().map(x => x.card?.info) || [];

            const uniqueMenuItems = [];
            menuItemsData.forEach((item) => {
                if (!uniqueMenuItems.find(x => x.id === item.id)) {
                    uniqueMenuItems.push(item);
                }
            })
            setMenuItems(uniqueMenuItems);
        } catch (error) {
            setMenuItems([]);
            setRestaurant(null);
            console.log(error);
        }
    }

    console.log("Restaurant Data :", restaurant);

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
                                    <button className="add-btn"> ADD +</button>
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