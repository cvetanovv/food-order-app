import Modal from "../UI/Modal/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
    const dummyCartItem = <ul className={classes['cart-items']}>{[
        { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
    ].map((item) => <li>{item.name}</li>)}</ul>;

    return (
        <Modal onClose={props.onClose}>
            {dummyCartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>11.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
