import React from 'react';
import logo from './logo.svg';
import { useState, useReducer } from 'react'
import './App.css';


const initialState = {count:0}

type ACTIONTYPE = 
| { type: 'increment', payload: number} 
| { type: 'decrement', payload: string} 

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch(action.type){
    case 'increment':
        return {count: state.count + action.payload}
    case 'decrement':
        return {count: state.count - Number(action.payload)}
    default:
      throw new Error();
  }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
    <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'increment', payload: 5})}>+</button>
        <button onClick={() => dispatch({type: 'decrement', payload: '5'})}>-</button>
    </>
  )
}

export default Counter;
