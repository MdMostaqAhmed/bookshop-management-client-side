import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Form } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Registered User: {user.user.email}</p>
            </div>
        );
    }

    return (
        <div className='w-50 mx-auto mt-3 login'>
            <h2>Please Register</h2>
            <div >

                <input className='mt-3' type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <input className='mt-2' type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button className='mt-2 btn btn-primary' onClick={() => createUserWithEmailAndPassword(email, password)}>
                    Register
                </button>
            </div>

        </div>
    );
};

export default Register;