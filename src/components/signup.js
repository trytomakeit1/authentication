import React, { Component } from 'react';


class Signup extends Component{

    constructor(){
        super();

    }

    render(){
        return (
        <div>
            
            <div className="form-container">
                <div className="form-ctrl form-ctrl-withLbl">
                    <label htmlFor="username">username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div className="form-ctrl form-ctrl-withLbl">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div className="form-ctrl form-ctrl-withLbl">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div><button>Register</button></div>
                
            </div>
        </div>)
    }

}
export default Signup;