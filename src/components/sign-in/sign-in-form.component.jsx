import { useState } from 'react';
import { signInWithGooglePopup, createUserProfileDocument, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }


    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserProfileDocument(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                alert('incorrect password for email');
            }
            console.log(error, '')
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>Already have have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>


                <FormInput
                    label="Email"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email} required />

                <FormInput
                    label="Password"
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password} required />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>

            </form>
        </div>
    );
};

export default SignInForm;


// removed from the signin with google method

/* try {
    const response = await signInWithGooglePopup();
    console.log('User:', response.user);
    // console.log('User Document Reference:', response.userDocRef);
} catch (error) {
    console.error('Error signing in with Google:', error);
} */