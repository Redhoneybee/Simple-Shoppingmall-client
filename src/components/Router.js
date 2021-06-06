import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";

// routes
import Home from "../routes/Home";
import Login from "../routes/Login";


const AppRouter = () => {
    return (
        <div className="container">
            <Router>
                <Header />
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
        </div>
    );
}


export default AppRouter;