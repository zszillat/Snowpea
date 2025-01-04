import { useContext, createContext, Children, useEffect, useState } from "react";
import { 
    GoogleAuthProvider, 
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        //signInWithRedirect(auth, provider)
    };

    const logout = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('User', currentUser)
            setUser(currentUser)
        });

        return  () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ googleSignIn, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext)
}