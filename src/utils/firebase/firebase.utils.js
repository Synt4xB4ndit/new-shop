// import { initializeApp } from 'firebase/app'
//import {
//  getAuth,
//  signInWithRedirect,
//  signInWithPopup,
//  GoogleAuthProvider
// } from 'firebase/auth';

//

import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQVabHgtfp5-woc7DpmrGfXbssMD2z4S4",
    authDomain: "new-shop-db.firebaseapp.com",
    projectId: "new-shop-db",
    storageBucket: "new-shop-db.appspot.com",
    messagingSenderId: "66219390789",
    appId: "1:66219390789:web:6de008527d56353809b02c",
    // measurementId: "G-1PXH85JVQ1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

// Get Auth instance
const auth = getAuth(firebaseApp);

// Sign in with Google Popup
export const signInWithGooglePopup = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const userDocRef = await createUserProfileDocument(user);
        return { user, userDocRef };
    } catch (error) {
        throw error;
    }
};

// Firestore database instance
const db = getFirestore(firebaseApp);

// Create user profile document
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.error('Error creating user document', error);
        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;


    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;


    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

//permenent Listener
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);





//

/*
const firebaseConfig = {
    apiKey: "AIzaSyCQVabHgtfp5-woc7DpmrGfXbssMD2z4S4",
    authDomain: "new-shop-db.firebaseapp.com",
    projectId: "new-shop-db",
    storageBucket: "new-shop-db.appspot.com",
    messagingSenderId: "66219390789",
    appId: "1:66219390789:web:6de008527d56353809b02c",
    // measurementId: "G-1PXH85JVQ1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//analtics
//const analytics = getAnalytics(app);

// THE CODE NEEDED FOR
// THE ANALYTICS


// Configure Google provider
 const provider = new GoogleAuthProvider();
 provider.setCustomParameters({
    prompt: 'select_account'
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

*/





//Newer stuff

//export const db = getFirestore()

//const createUserDocumentFromAuth = async (userAuth) => {
//   const userDocRef = doc(db, 'users',)
// }