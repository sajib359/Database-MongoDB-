import React from 'react';

const AddUser = () => {

    const handleAddUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = {name,email};
    }
    return (
        <div>
            <h1>please add a user</h1>

            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Name' required /><br />
                <input type="text" name='email' placeholder='Email' required />
                 <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;