import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';

// firebase auth setup
const auth = getAuth(app);

const Register = () => {
    // error message 
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // for email change
    const handleEmailChange = (event) => {
        // console.log(event.target.value);
        // setEmail(event.target.value);
    }
    // for password blur 
    const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
    }
    // for submit btn
    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        // validate
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        // create new user in firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                event.target.reset();
                setSuccess('User has created successfully')
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    }
    return (
        <div className='w-50 mx-auto'>
            <h4>
                Please Register
            </h4>
            <form
                onSubmit={handleSubmit}>
                <input
                    className='w-50 mb-4 rounded ps-2'
                    onChange={handleEmailChange}
                    type="email"
                    name="email"
                    id="email"
                    placeholder='Your Email'
                    required
                />
                <br />
                <input
                    className='w-50 mb-4 rounded ps-2'
                    onBlur={handlePasswordBlur}
                    type="password"
                    name="password"
                    id="password"
                    placeholder='Your Password'
                    required
                />
                <br />
                <input
                    className='btn btn-primary'
                    type="submit"
                    value="Register"
                />
            </form>
            <p
                className='text-danger'>
                {error}
            </p>
            <p
                className='text-success'>
                {success}
            </p>
        </div>
    );
};

export default Register;