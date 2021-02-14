import React from 'react';
import ReactDOM from "react-dom";
import { Grid, Header } from 'semantic-ui-react';
import ItemCard from './ItemCard';
import NavBar from './NavBar';

const shirtData: {    
    id: number,
    name: string, 
    price: number, 
    size: string, 
    description?: string,
    image?: string
    rating: number
    }[] = [
        { "id": 1, "name": "shirt1", "price": 21.98, "size": "L", "description": "this is shirt #1", "image": "shirt1.jpg", "rating": 2 },
        { "id": 2, "name": "shirt2", "price": 18.99, "size": "S", "description": "this is shirt #2", "image": "shirt2.jpg", "rating": 4 },
]

const ShirtsTable = () => {
    return (
        <>
        <NavBar />
            <Header as="h2">SHIRTS</Header>
            <Grid columns={3} divided>
                <Grid.Row>
                    {shirtData.map((shirt) => (
                        <Grid.Column>
                            <ItemCard id={shirt.id} name={shirt.name} price={shirt.price} size={shirt.size} description={shirt.description} image={shirt.image} rating={shirt.rating}/>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </>
    )
}

export default ShirtsTable;