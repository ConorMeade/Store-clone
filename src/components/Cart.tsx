import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { ItemProps } from 'semantic-ui-react';

interface CartProps {
    total: Number;
    items: ItemProps;
    isOpen: Boolean;
}

const Cart = (props: CartProps) => {
    const [showModal, setShowModal] = useState(false)

}

export default Cart;