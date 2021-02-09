import React from 'react';
import logo from './logo.svg';
import { useState, useReducer } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import HatsTable from './components/HatTable';
import PantsTable from './components/PantsTable';
import ShirtsTable from './components/ShirtsTable';
import ShoesTable from './components/ShoesTable';
// import HatsTable from './components/HatTable';


const initialState = {count:0}

interface AppProps {
  message: string;
}

const App = () => {
  const [val, toggle] = useState(false)
  const [user, setUser] = useState<string | null>(null)
  return (
    <>
      <Container>
      {/* The sidebar will take the same height as its enclosing div */}
        <NavBar />
        <HatsTable />
        <br />
        <PantsTable />
        <br />
        <ShirtsTable />
        <br />
        <ShoesTable />
      </Container>
    </>
  )
}

export default App;
