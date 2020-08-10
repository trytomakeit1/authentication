import React from 'react';
import {Component } from 'react';
import axios from 'axios';

class Login extends Component{
    constructor(){
        super();

        this.loginSubmit = this.loginSubmit.bind(this);
    }


    loginSubmit(e){
        e.preventDefault();
        let username = e.target.elements.username.value;
        let password = e.target.elements.password.value;

        axios.post("http://localhost:8080/api/login", {username, password}).then((res)=>{
            console.log("successfully called the api");
        });
 
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