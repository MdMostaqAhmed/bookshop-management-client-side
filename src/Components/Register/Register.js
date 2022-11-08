import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Form } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {

    const [name, setName] = useState('')
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
        <div className='w-50 mx-auto mt-3'>

            <h1>Please Register</h1>



            <div className="">
                <input className='mt-3' type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <input className='mt-3' type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <input className='mt-2' type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button className='mt-2' onClick={() => createUserWithEmailAndPassword(name, email, password)}>
                    Register
                </button>
            </div>

        </div>
    );
};

export default Register;