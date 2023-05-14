/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Read = () => {

    const loadedData = useLoaderData();

    const [users, setUsers] = useState(loadedData);

    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert("User deleted successfully");
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
                }
            })
    }


    return (
        <div>
            <Link></Link>
            <h2>This is read</h2>
            {
                users.map(user =>
                    <div
                        key={user._id}
                    >
                        <hr />
                        <p>{user.name}</p>
                        <p>{user._id}</p>
                        <p>{user.email}</p>
                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                        <Link to={`/users/${user._id}`}>
                            <button>Update</button>
                        </Link>
                        <hr />
                    </div>
                )
            }
        </div>
    );
};

export default Read;