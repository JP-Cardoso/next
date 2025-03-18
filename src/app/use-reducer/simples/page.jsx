"use client";
import { useReducer, useState } from "react";

export default function UseReducerPage() {
  const initialValue = {
    count: 0,
  };

  const [count, setCount] = useState(0);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1
        }
      case "decrement":
        return {
          count: state.count - 1
        }
      default:
        return state;
    }

  }

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h3>useReducer</h3>

      <h2 style={{ marginTop: '10px' }}>
        <label>Count com useState</label>
      </h2>

      <button
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <div>
        <span>{count}</span>
      </div>
      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <hr />

      <h2 style={{ marginBottom: '10px', marginTop: '10px' }}>
        <label>Count com useReducer</label>
      </h2>

      <button
        onClick={() => dispatch({ type: 'decrement' })}
      >
        Decrement
      </button>
      <div>
        <span>{state.count}</span>
      </div>
      <button
        onClick={() => dispatch({ type: 'increment' })}
      >
        Increment
      </button>

    </>
  );
}