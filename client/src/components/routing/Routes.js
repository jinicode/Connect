import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';

const Routes = ()=>{
return (
  <section className="container">
    <Alert/>
    <Switch>
      <Route exact path="/register" component={Register}/>
      <Route exact path='/login' component={Login} />
    </Switch>
  </section>
)

};


export default Routes;
