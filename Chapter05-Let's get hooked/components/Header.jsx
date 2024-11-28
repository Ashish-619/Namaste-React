import React from "react";
import headerImage from "../../Chapter04-Talk is cheap show me the code/img/food-delivery-icon.png";
import "../../Chapter04-Talk is cheap show me the code/App.css";

const Header = () => {
    return (
        <>
            <header>
                <img src={headerImage} alt="food express" className="img-1" />
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/fast-cart.png" alt="fast-cart" /></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;