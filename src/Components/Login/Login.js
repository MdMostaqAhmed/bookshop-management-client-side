import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

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
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }


    return (

        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={() => signInWithEmailAndPassword(email, password)}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <input className='btn btn-primary mt-2' type="submit" value="Sign In"></input>
            </form>

            <button className='btn btn-primary my-2' onClick={() => signInWithEmailAndPassword(email, password)}> Sign In </button>

            <p>Are You New ?{"  "} <Link to='/register' className='form-link'>Please Register</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;