import React from 'react';
import { Switch, Route } from 'react-router-dom';

// view components
import About from '../views/About';
import Contact from '../views/Contact';
import Home from '../views/Home';

const Main = () => {
    return(
        <div>
            Main
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    )
}

export default Main;