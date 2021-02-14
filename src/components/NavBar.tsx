import React, { useState, useRef } from 'react';
import './NavBar.css';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const style = <link rel="stylesheet" href= 'https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css' />

const NavBar = () => {
    const [activeItem, setActiveItem] = useState("home");

    return (
        <Menu text>
            <Menu.Item header>Conor's Clothing Shop</Menu.Item>
            <Menu.Item
                className='item'
                as={ Link }
                name = 'Home'
                to='/Home'
                active={activeItem === "Home"}
                onClick={() => setActiveItem('Home')}
            />
            <Menu.Item
                className='item'
                as={ Link }
                name = 'hats'
                to='/Hats'
                active={activeItem === "hats"}
                onClick={() => setActiveItem('hats')}
            />
            <Menu.Item
                className='item'
                as={ Link }
                name = 'shirts'
                to='/Shirts'
                active={activeItem === "shirts"}
                onClick={() => setActiveItem('shirts')}
            />
            <Menu.Item
                className='item'
                as={ Link }
                name = 'pants'
                to='/Pants'
                active={activeItem === "pants"}
                onClick={() => setActiveItem('pants')}
            />
            <Menu.Item
                className='item'
                as={ Link }
                name = 'shoes'
                to='/Shoes'
                active={activeItem === "shoes"}
                onClick={() => setActiveItem('shoes')}
            />
        </Menu>
    )
}

export default () => (
    <div className="ui menu">{style}<NavBar /></div>
);