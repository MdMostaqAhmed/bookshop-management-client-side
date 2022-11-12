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

        alert("Signed In User")


    }


    return (

        <div className='container w-50 mx-auto login viewport'>
            <h1>Login</h1>
            <form onSubmit={() => signInWithEmailAndPassword(email, password)}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='off' /> <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete='off' /> <br />
                <input className='btn btn-primary mt-2' type="submit" value="Sign In"></input>
            </form>

            <p>Forget Password? {"  "} <Link to='/passwordReset' className='form-link'>Reset Password</Link></p>
            <p>Are You New ?{"  "} <Link to='/register' className='form-link'>Please Register</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;