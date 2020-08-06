import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.redirectTo = this.redirectTo.bind(this);

    this.state={
      currentPage: "login"

    }
  }

  redirectTo(page){

    console.log("page: ", page);
    this.setState({
      currentPage: page
    });
     

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          
            <Route exact path={["/login","/"]} render={()=>{
              return (
                <div>
                  <p style={{fontWeight: "600"}}>Please login using your username and password</p>
                  <div className="form-container">
                      <Login />
                      <p style={{fontSize: "1rem"}}>If you don't have an account yet, <Link id="singup" to="signup" onClick={()=>{this.redirectTo("signup")}} >sign up</Link></p>
                  </div>
                </div>
              )
            }} />
            <Route path="/signup" render={()=>
            (<div>
                <p style={{fontWeight: "600"}}>Enter your data to create an account</p>
                <Signup />
              </div>)
            } />
        </header>
      </div>
    );
  }
}

export default App;
