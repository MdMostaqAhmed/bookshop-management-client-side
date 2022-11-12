import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './passwordReset.css'

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    return (
        <div className='viewport container passwordReset'>
            <h2 className='mt-4 d-flex justify-content-center'>Reset Your Password</h2>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" /> < > </>
            <button
                onClick={async () => {
                    const success = await sendPasswordResetEmail(email);
                    toast("Sent Email")
                    toast("Please Check Your Email")
                    if (success) {
                        alert('Sent email');

                    }
                }}
            >
                Reset password
            </button>
        </div>
    );
};

export default PasswordReset;