
import React from "react";
import './../styles/App.css';
import { increment,decrement } from "../redux/actions/counterActions";
import {useSelector,useDispatch} from 'react-redux';

const App = () => {
  let count = useSelector(state=>state.count); //the global variable
  let dispatch = useDispatch();

  let increase = ()=>{
    dispatch(increment(count))//get the updated increased count variable
  }

  let decrease = ()=>{
    dispatch(decrement(count)) //get the updated decreased count variable
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{count}</h1>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
    </div>
  )
}

export default App
