import React from 'react';
import ReactDOM from "react-dom";
import { Grid, Header } from 'semantic-ui-react';
import ItemCard from './ItemCard';
import NavBar from './NavBar';


const pantsData: {    
    id: number,
    name: string, 
    price: number, 
    size: string, 
    description?: string,
    image?: string
    rating: number
    }[] = [
        { "id": 1, "name": "pants1", "price": 99.99, "size": "L", "description": "pants #1", "image": "pants1.jpg", "rating": 2 },
        { "id": 2, "name": "pants2", "price": 34.89, "size": "S", "description": "pants #2", "image": "pants2.jpg", "rating": 5 },
        { "id": 3, "name": "pants3", "price": 19.99, "size": "M", "description": "pants #3", "image": "pants3.jpg", "rating": 4 }
    ]


const PantsTable = () => {
    return (
        <>
        <NavBar />
            <Header as="h2">PANTS</Header>
            <Grid columns={3} divided>
                <Grid.Row>
                    {pantsData.map((pants) => (
                        <Grid.Column>
                            <ItemCard id={pants.id} name={pants.name} price={pants.price} size={pants.size} description={pants.description} image={pants.image} rating={pants.rating}/>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </>
    )
}

export default PantsTable;