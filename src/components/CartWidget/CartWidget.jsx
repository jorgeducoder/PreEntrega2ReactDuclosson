import React from 'react';
import { BsCartFill } from "react-icons/bs";

const CartWidget = () => {
    return (
        <div>
            <BsCartFill/>
            <p>0</p>
        </div>
    );
};

export default CartWidget;