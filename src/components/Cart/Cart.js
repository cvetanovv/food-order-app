import Modal from "../UI/Modal/Modal";

import classes from "./Cart.module.css";

const Cart = (props) => {
    const dummyCartItem = <ul className={classes['cart-items']}>{[
        { id: "c1", name: "Sushi", amount: 2, price: 12.99 },
    ].map((item) => <li>{item.name}</li>)}</ul>;

    return (
        <Modal>
            {dummyCartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>11.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
