import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import UserEdit from "./userEdit";
import UserPage from "./userPage";

const User = ({ users }) => {
    const { path } = useRouteMatch();
    return (
        <>
            <Switch>
                <Route path={path + "/profile"} component={UserEdit} />
                <Route path={path} render={() => <UserPage users={users} />} />
                <Redirect to={path} />
                {/* //? После редиректа адресная строка не очищается ? */}
            </Switch>
        </>
    );
};

export default User;
