import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { ItemProps } from 'semantic-ui-react';
import ItemCard from './ItemCard'

interface CartProps {
    total: Number;
    items: ItemProps;
    isOpen: Boolean;
}

const Cart = (props: CartProps) => {
    const [showModal, setShowModal] = useState(false)

}

export default Cart;