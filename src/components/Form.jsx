import React, { useRef, useContext } from "react";
import GlobalContext from "../state/GlobalContext";

const Form = () => {
  const nameRef = useRef();
  const {state, dispatch} = useContext(GlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: "CHANGENAME", payload: nameRef.current.value})
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>What's your name?</h2>
        <input type="text" placeholder="What's your name?" ref={nameRef} />
        <button>Change</button>
      </form>
      <div className="count-container">
        <button onClick={() => dispatch({type: "DECREASE"})}>-</button>
        <h3>Count:</h3>
        <button onClick={() => dispatch({type: "INCREASE"})}>+</button>
      </div>
    </div>
  );
};

export default Form;
