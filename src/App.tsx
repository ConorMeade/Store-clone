import React from 'react';
import logo from './logo.svg';
import { useState, useReducer } from 'react'
import './App.css';


const initialState = {count:0}

interface AppProps {
  message: string;
}

const App = () => {
  const [val, toggle] = useState(false)
  const [user, setUser] = useState<string | null>(null)
  return (
    <div>Hello World!</div>
  )
}

export default App;
