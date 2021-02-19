// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Components/home';
import Profile from './Components/profile';
import {Route,Redirect,Switch} from 'react-router-dom';
import About from './Components/about';
import Page404 from './Components/page404';
import NavBar from './Components/NavBar';

function App() {
  return (
    <React.Fragment>
      
      <NavBar></NavBar>
    <Switch>
      <Route path="/profile/new">
        <Profile/>
      </Route>

      <Route path="/profile" exact>
        <Profile/>
      </Route>

      <Route path="/" exact>
        <Home/>
      </Route>
      
      <Route path="/home">
        <Home/>
      </Route>

      <Route path="/about">
        <About/>
      </Route>


      <Route path="/404">
        <Page404/>
      </Route>

      <Redirect to="/404"></Redirect> 
    </Switch>
   </React.Fragment>
  );
}

export default App;
