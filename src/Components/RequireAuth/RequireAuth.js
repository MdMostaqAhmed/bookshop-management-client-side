import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from "react-toastify";
import Loading from '../Loading/Loading';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>;
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }

    if (!user.emailVerified) {
        return (
            <div className="text-center mt-5">
                <h3 className="text-danger">Your Email is not verified</h3>
                <h5 className="text-success">Please Verify your email address </h5>
                <h6 className="text-success">Please Click Sign out Button, Verify Your Email and Try Login</h6>
                <button
                    className="btn btn-primary"
                    onClick={async () => {
                        await sendEmailVerification();
                        toast("Sent email");
                    }}
                >
                    Send Verification Email Again
                </button>

            </div>
        );
    }

    return children;

}

export default RequireAuth;