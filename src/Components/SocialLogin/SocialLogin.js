import React from 'react';
import { useSignInWithGoogle, useSignInWithGithub, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/social/google.png';
import facebook from '../../images/social/facebook.png';
import github from '../../images/social/gihub.png';
import Loading from '../Loading/Loading';



const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);


    let errorElement;

    if (error || error1 || error2) {
        errorElement = (<p>Error: {error?.message} {error1?.message}  {error2?.message}</p>)
    }

    const navigate = useNavigate()
    if (user || user1 || user2) {
        navigate("/home")
    }

    if (loading || loading1 || loading2) {
        <Loading></Loading>
    }


    return (
        <div className='container'>

            <div className="d-flex align-items-center">
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className="mt-2 px-2">or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>

            </div>
            <h2 className='mb-4'>Social Login</h2>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-info d-block w-50 mx-auto my-2"
                >
                    <img style={{ width: "20px" }} src={google} alt="" />
                    <span className="px-2">Google Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()}
                    className="btn btn-info d-block w-50 mx-auto my-2">
                    <img style={{ width: "20px" }} src={github} alt="" />
                    <span className="px-2">Github Sign In</span>
                </button>
                <button
                    onClick={() => signInWithFacebook()}
                    className="btn btn-info d-block w-50 mx-auto my-2"
                >
                    <img style={{ width: "20px" }} src={facebook} alt="" />
                    <span className="px-2">Facebook Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;