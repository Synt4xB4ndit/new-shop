
import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up/sign-up-form.component';

const SignIn = () => {
    const logGoogleUser = async () => {
        try {
            const response = await signInWithGooglePopup();
            console.log('User:', response.user);
            console.log('User Document Reference:', response.userDocRef);
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    };

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google</button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;




{/* import {
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
*/}




