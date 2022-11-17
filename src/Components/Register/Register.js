import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import './Register.css';
import auth from '../../firebase.init';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';


const Register = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [passwordError, setPasswordError] = useState("")
    const location = useLocation();
    let from = location.state?.from?.pathname || "/login";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Loading></Loading>;
    }
    if (user) {
        return (
            <div className='w-50 mx-auto'>
                <p>Registered User: {user?.user.email}</p>
                <p>Please Check Your Email and Verify Your Email</p>
            </div>
        );
    };



    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(password.length);

        if (password.length < 6) {
            setPasswordError("Password must be 6 characters or longer");
            return;
        }
        else {
            await createUserWithEmailAndPassword(email, password);
            navigate(from, { replace: true });
            alert("Please Check Your Email and Verify")
            toast("Verification Link Send To Your Email")
        }
    }





    return (
        <div className='w-50 mx-auto mt-3 login viewport'>
            <h2>Please Register</h2>
            <div >



                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p>{passwordError}</p>
                    <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                        Register
                    </Button>
                </Form>


            </div>



        </div>
    );
};

export default Register;