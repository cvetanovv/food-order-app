import React from "react";

import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

export const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="Meals image" />
      </div>
    </>
  );
};
