import React, { useRef } from 'react';
import './Login.css';

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onIdSubmit(idRef.current.value);
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="mobileNo">Enter Your Mobile No</label>
        <input type="number" name="mpbileNo" ref={idRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
