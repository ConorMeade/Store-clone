import React from 'react';
import ReactDOM from "react-dom";
import { Grid, Header } from 'semantic-ui-react';
import ItemCard from './ItemCard';
import NavBar from './NavBar';


const Home = () => {
    return (
        <>
            <NavBar />
            <br />
            <br />
            <Header as="h1">HOME PAGE</Header>
        </>
    )
}

export default Home;