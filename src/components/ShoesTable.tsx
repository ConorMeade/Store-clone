import React from 'react';
import ReactDOM from "react-dom";
import { Grid, Header } from 'semantic-ui-react';
import ItemCard from './ItemCard';
import NavBar from './NavBar';



const shoeData: {    
    id: number,
    name: string, 
    price: number, 
    size: string, 
    description?: string,
    image?: string
    rating: number
    }[] = [
        { "id": 1, "name": "shoe1", "price": 70.99, "size": "11", "description": "this is shoe #1", "image": "shoe1.jpg", "rating": 2 },
        { "id": 2, "name": "shoe2", "price": 125.99, "size": "8", "description": "this is shoe #2", "image": "shoe2.jpg", "rating": 5 },
]
const ShoesTable = () => {
    return (
        <>
        <NavBar />
            <Header as="h2">SHOES</Header>
            <Grid columns={3} divided>
                <Grid.Row>
                    {shoeData.map((shoe) => (
                        <Grid.Column>
                            <ItemCard id={shoe.id} name={shoe.name} price={shoe.price} size={shoe.size} description={shoe.description} image={shoe.image} rating={shoe.rating}/>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </>
    )
}

export default ShoesTable;