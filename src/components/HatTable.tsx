import React from 'react';
import ReactDOM from "react-dom";
import ItemProps from './ItemCard'
import { Grid, Image, Rating } from 'semantic-ui-react';
import ItemCard from './ItemCard';


const hatData: {    
    id: number,
    name: string, 
    price: number, 
    size: string, 
    description?: string,
    image?: string
    rating: number
    }[] = [
        { "id": 1, "name": "hat1", "price": 13.36, "size": "OS", "description": "this is hat #1", "image": '../imgs/hat1.jpg', "rating": 4 },
        { "id": 2, "name": "hat2", "price": 7.89, "size": "OS", "description": "this is hat #2", "image": '../imgs/hat2.jpg', "rating": 5 },
        { "id": 3, "name": "hat3", "price": 19.99, "size": "OS", "description": "this is hat #3", "image": '../imgs/hat3.jpg', "rating": 1 },
        { "id": 4, "name": "hat4", "price": 2.34, "size": "OS", "description": "this is hat #4", "image": '../imgs/hat4.jpg', "rating": 3 },
        { "id": 5, "name": "hat5", "price": 73.20, "size": "OS", "description": "this is hat #5", "image": '../imgs/hat5.jpg', "rating": 4 },
        { "id": 6, "name": "hat6", "price": 12.12, "size": "OS", "description": "this is hat #6", "image": '../imgs/hat6.jpg', "rating": 2 },
]


const HatsTable = (props: typeof ItemProps) => {
    return (
        <Grid columns={3} divided>
            {/* map hatData as ItemCards and make a grid */}

        </Grid>
    )
}

export default HatsTable;