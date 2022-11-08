import React from "react";
import { Link, useParams } from "react-router-dom";

const UserEdit = () => {
    const params = useParams();
    const { userId } = params;
    return (
        <>
            <h2>User Edit Page</h2>
            <ul>
                <li>
                    <Link to={`/users/${userId}`}>User Profile Page</Link>
                </li>
                <li>
                    <Link to={`/users/${+userId + 1}`}>Another User</Link>
                </li>
                <li>
                    <Link to="/users">Users List Page</Link>
                </li>
            </ul>
        </>
    );
};

export default UserEdit;
