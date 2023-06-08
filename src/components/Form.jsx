import React, { useState } from "react";

function Form(props) {

    const [name, setName] = useState("")
    const [textName, setTextName] = useState("")

    function handleChange(e) {
        setName(e.target.value)
    }

    function handleClick(eve) {
        setTextName(name)
        
        eve.preventDefault()
    }

    return (
        <div className="col-md-6">

        <h4 className="text-center">{textName}</h4>

            <form className="form" onSubmit={handleClick}>
                <h2 className="text-center mb-3">{props.isRegistered ? "Login" : "Register"}</h2>
                <div className="form-group">
                    <label htmlFor="username">User name:</label><br />
                    <input type="text" onChange={handleChange} value={name} placeholder="Username" id="username" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" id="password" placeholder="Password" className="form-control" />
                </div>
                {!props.isRegistered && (
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password:</label><br />
                        <input type="password" id="confirm-password" placeholder="Confirm Password" className="form-control" />
                    </div>
                )}

                <button className="mt-2" type="submit">{props.isRegistered ? " Login" : "Register"}</button>
            </form>
        </div>
    );
}

export default Form;
