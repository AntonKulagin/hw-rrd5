import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import User from "./user";
import UsersList from "./usersList";

const Users = () => {
    const { path } = useRouteMatch();

    const users = [
        { id: 0, title: "User 0" },
        { id: 1, title: "User 1" },
        { id: 2, title: "User 2" },
        { id: 3, title: "User 3" },
        { id: 4, title: "User 4" },
    ];

    return (
        <>
            <h2>Users Layout</h2>
            <Link to="/">Main Page</Link>
            <Switch>
                <Route path={path + "/:userId"} render={(props) => <User users={users} {...props} />} />
                <Route path={path + "/"} render={(props) => <UsersList users={users} {...props} />} />
            </Switch>
        </>
    );
};

export default Users;
