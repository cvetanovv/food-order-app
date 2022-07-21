import React from "react";

import HeaderCartButton from "./HeaderCartButton"

import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";


const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClickCart={props.onShowCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImg} alt="Meals image" />
            </div>
        </>
    );
};

export default Header;
