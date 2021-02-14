import React, { useState } from 'react';
import { Card, Rating, Button, Image } from 'semantic-ui-react'
// import '../imgs';
import ReactDOM from "react-dom";
import Cart from './Cart'


export type ItemProps = {
    id: number;
    name: string;
    price: number;
    // amount: number;
    size: string;
    description?: string;
    image?: string;
    rating: number;
}


const ItemCard = (item: ItemProps) => {
    const [cartValue, setCartValue] = useState(0)
    const [itemAmount, setItemAmount] = useState(1)
    const [hover, setHover] = useState(false)
    
    return(
        <Card>
            {/* <Image src={(item.image!)} alt="image did not load" width="400" height="500" wrapped ui={false}/>
             */}
             <img src={item.image} height="300" width="300" alt="did not load"/>
            <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>
                   <span className='date'>{item.size} (${item.price})</span> 
                </Card.Meta>
                <Card.Description>
                    {item.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Button>Add To Cart!</Button>
                </a>
                <a>
                    <Rating icon='star' defaultRating={item.rating} maxRating={5} />
                </a>
            </Card.Content>
        </Card>
    )


}

export default ItemCard