import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
    return (
        <>
            <h2>Users List Page</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default UsersList;
