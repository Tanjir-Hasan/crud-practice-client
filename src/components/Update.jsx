/* eslint-disable no-unused-vars */
import React from 'react';

const Update = () => {

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const user = {name, email};

        console.log(user);
    }

    return (
        <div>
            this is updated
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" />
                <br /> <br />
                <input type="email" name="email" id="" />
                <br /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Update;