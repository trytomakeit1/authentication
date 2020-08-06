import React from 'react';
import {Component } from 'react';

class Login extends Component{
    constructor(){
        super();

        this.loginSubmit = this.loginSubmit.bind(this);
    }

    loginSubmit(e){
        e.preventDefault();
        console.log(e.target.elements.username.value);
    }


    render(){
        return (
        
                <form onSubmit={this.loginSubmit}>
                    <div className="form-ctrl"><input type="text" name="username" placeholder="username" /></div>
                    <div className="form-ctrl"><input type="password" name="password" placeholder="password" /></div>
                    <div><button>Submit</button></div>
                </form>


               
           )
    }
}


export default Login;