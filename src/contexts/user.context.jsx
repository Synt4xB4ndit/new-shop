import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, createUserProfileDocument } from '../utils/firebase/firebase.utils';

//as the actual value we want to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };


    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserProfileDocument(user);
            }
            setCurrentUser(user);
        })

        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}

