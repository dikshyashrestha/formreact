import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Login from './login';
import Register from './register';
import home from './home';



class Routing extends Component{
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/home' component={home}/>
                </Switch>
            </Router>



        )
    }

}

export default Routing;
