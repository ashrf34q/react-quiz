import { useReducer, useState } from "react";

const initialState = { count: 0, step: 1 };

// state is the current state, action is an object consisting
// of type and payload attributes. Type is like a key that lets us know how to update the current state with payload provided.
// @returns the next state
function reducer(state, action) {
  console.log(state, action);

  // All the possible state updates in our app are below in this reducer function

  // Best to use switch statement
  if (action.type === "inc" || action.type === "dec")
    return { ...state, count: state.count + action.payload };

  if (action.type === "def") return { ...state, count: action.payload };

  if (action.type === "step") return { ...state, step: action.payload };

  if (action.type === "reset") return initialState;
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    // setCount((count) => count - 1);
    dispatch({ type: "dec", payload: -state.step });
  };

  const inc = function () {
    // setCount((count) => count + 1);
    dispatch({ type: "inc", payload: state.step });
  };

  const defineCount = function (e) {
    dispatch({ type: "def", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "step", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
