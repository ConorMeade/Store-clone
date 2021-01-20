import React from 'react';
import logo from './logo.svg';
import { useState, useReducer } from 'react';
import SideBar from './components/NavBar';
import './App.css';
import { Container } from 'semantic-ui-react';
import NavBar from './components/NavBar';


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
      </Container>
    </>
  )
}

export default App;
