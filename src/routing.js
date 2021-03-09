import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Routing} from 'react-router--dom';

import Login from './login';
import Register from './register';



class Routing extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    
                </Switch>
            </Router>



        )
    }

}
