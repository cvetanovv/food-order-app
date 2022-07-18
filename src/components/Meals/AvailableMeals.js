import classes from "./AvailableMeals.module.css";
import DUMMY_MEALS from "./DummyMealsData";

const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <ul>
                {DUMMY_MEALS.map(meal => <li>{meal.name}</li>)}
            </ul>
        </section>
    );
};

export default AvailableMeals;
