import React, { useState } from 'react';
import { Card, Rating, Button } from 'semantic-ui-react'
import ReactDOM from "react-dom";


export type ItemProps = {
    id: Number;
    name: String;
    amount: Number;
    descroption?: String;
    image?: File;
    rating: Number;
}

// interface ItemAction {
//     location: String;
//     item: ItemProps;
//     // onClick() : void
// }

const ItemCard = (item: ItemProps) => {
    const [itemAmount, setItemAmount] = useState(1)
    const [hover, setHover] = useState(false)


}

export default ItemCard