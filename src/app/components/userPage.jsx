import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

const UserPage = ({ users }) => {
    const params = useParams();
    const userId = Number(params.userId);
    if (userId.toString() === "NaN" || userId >= users.length) {
        return <Redirect to="/users" />;
    }
    return (
        <>
            <h2>User Page</h2>
            <ul>
                <li>
                    <Link to="/users">User List Page</Link>
                </li>
                <li>
                    <Link to={`/users/${userId}/profile`}>Edit This User</Link>
                </li>
            </ul>
            <h3>userId: {userId}</h3>
        </>
    );
};

export default UserPage;
