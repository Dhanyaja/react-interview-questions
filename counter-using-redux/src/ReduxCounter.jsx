import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/Slices/ReduxCounterSlice";

const ReduxCounter = () => {
  const value = useSelector((state) => state.ReduxCounter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Counter Component</h1>
      {value}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>0</button>
    </div>
  );
};

export default ReduxCounter;
