import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';

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
          { 
            this.state.currentPage === "signup" ? <Signup /> : 
            
            <div>
              <p style={{fontWeight: "600"}}>Please login using your username and password</p>
              <div className="form-container">
                <Login />
                <p style={{fontSize: "1rem"}}>If you don't have an account yet, <a id="aaa" href="#" onClick={()=>{this.redirectTo("signup")}} >sign up</a></p>
              </div>
            </div>
          }
        </header>
      </div>
    );
  }
}

export default App;
