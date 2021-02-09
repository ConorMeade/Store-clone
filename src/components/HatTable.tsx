import React from 'react';
import ReactDOM from "react-dom";
import { Grid, Header } from 'semantic-ui-react';
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
        { "id": 1, "name": "hat1", "price": 13.36, "size": "OS", "description": "this is hat #1", "image": "hat1.jpg", "rating": 4 },
        { "id": 2, "name": "hat2", "price": 7.89, "size": "OS", "description": "this is hat #2", "image": "hat2.jpg", "rating": 5 },
        { "id": 3, "name": "hat3", "price": 19.99, "size": "OS", "description": "this is hat #3", "image": "hat3.jpg", "rating": 1 },
        { "id": 4, "name": "hat4", "price": 2.34, "size": "OS", "description": "this is hat #4", "image": "hat4.jpg", "rating": 3 },
        { "id": 5, "name": "hat5", "price": 73.20, "size": "OS", "description": "this is hat #5", "image": "hat5.jpg", "rating": 4 },
        { "id": 6, "name": "hat6", "price": 12.12, "size": "OS", "description": "this is hat #6", "image": "hat6.jpg", "rating": 2 },
]



const HatsTable = () => {
    return (
        <>
            <Header as="h2">HATS</Header>
            <Grid columns={3} divided>
                <Grid.Row>
                    {hatData.map((hat) => (
                        <Grid.Column>
                            <ItemCard id={hat.id} name={hat.name} price={hat.price} size={hat.size} description={hat.description} image={hat.image} rating={hat.rating}/>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </>
    )
}

export default HatsTable;