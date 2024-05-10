import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config.js';
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const   AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const createUser = (email,password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, image) => {
        return updateProfile(auth.currentUser, {
            diisplayName: name,
            photoURL: image
        })
    }

    const logOut = () => {
        setloading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setloading(false);
        });
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {user, loading, createUser, signInUser, updateUser, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node
}