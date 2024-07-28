
import React from 'react';
import SignUpForm from '../../components/sign-up/sign-up-form.component';
import SignInForm from '../../components/sign-in/sign-in-form.component';
import './authentication.styles.scss';

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;




/* import {
    signInWithGooglePopup,
    
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    };

    return (
        <div>
            <h1>Sign in Page</h1>
            <button
                onClick={logGoogleUser}
            >Sign in with google button </button>
        </div>
    )
}

export default SignIn;
*/




