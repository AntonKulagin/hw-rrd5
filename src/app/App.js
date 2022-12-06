import React from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import MainPage from "./components/mainPage";
import Users from "./components/users";

function App() {
    return (
        <>
            <h1>App Layout</h1>
            <Link to="/users">Users List Page</Link>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/users" component={Users} />
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;
