import React from 'react';
import { useState } from 'react';
import './App.css';
import { Container, Segment, Sidebar } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import { Route, Switch } from "react-router"
import Home from './components/Home';
import HatsTable from './components/HatsTable';
import PantsTable from './components/PantsTable';
import ShirtsTable from './components/ShirtsTable';
import ShoesTable from './components/ShoesTable';


const initialState = {count:0}

interface AppProps {
  message: string;
}

let routes = (
  <Switch>
    <Route path='/Home'>
      <Home />
    </Route>
    <Route path='/Hats'>
      <HatsTable />
    </Route>
    <Route path='/Shirts'>
      <ShirtsTable />
    </Route>
    <Route path='/Pants'>
      <PantsTable />
    </Route>
    <Route path='/Shoes'>
      <ShoesTable />
    </Route>
  </Switch>
);

const App = () => {
  const [val, toggle] = useState(false)
  const [user, setUser] = useState<string | null>(null)
  return (
    <>
      <Container>
      {/* The sidebar will take the same height as its enclosing div */}
        {/* <NavBar /> */}
        {routes}
      </Container>
    </>
  )
}

export default App;
