import React, { useState } from "react";
import Form from "./Form";

function App() {

  const [startState, setValue] = useState(true);

  function Login() {
    setValue(true)
  }

  function Register() {
    setValue(false)
  }

  return (
    <div>
      <header>
        <button type="button" className="btn btn-secondary" onClick={Login}>Login</button>
        <button type="button" className="btn btn-outline-secondary" onClick={Register}>Register</button>
      </header>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          <Form isRegistered={startState} />
        </div>
      </div>
    </div>
  );
}

export default App;