/* eslint-disable no-unused-vars */
import React from 'react';

const Create = () => {

    const handleCreate = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const user = { name, email };

        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("User created successfully");
                    form.reset()
                }
            })
    }

    return (
        <div>
            <h3>This is create</h3>

            <form onSubmit={handleCreate}>
                <input type="text" name="name" id="" />
                <br /> <br />
                <input type="email" name="email" id="" />
                <br /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Create;