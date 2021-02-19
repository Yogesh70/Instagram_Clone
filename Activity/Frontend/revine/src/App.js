import React from 'react';
import './App.css';
import UserView from './Component/userComponent/UserView.jsx';
import {Route, Switch} from 'react-router-dom';
import NavBar from './Component/NavBar';
import Settings from './Component/Settings';
import Page404 from './Page404';

function App() {
  return ( 
    <React.Fragment>
      <NavBar></NavBar>
      <Switch>

        <Route path="/" unique>
          <UserView></UserView>
        </Route>

        <Route path="/settings" unique>
          <Settings></Settings>
        </Route>

        <Route to="/404">
          <Page404></Page404>
        </Route>
        
      </Switch>
    </React.Fragment>
   );
}

export default App;
