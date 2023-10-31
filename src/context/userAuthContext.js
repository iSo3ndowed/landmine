import { createContext, useContext, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'
import {auth} from '../components/firebase'
import { useEffect } from "react";

const UserAuthContext = createContext()

export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState('')

    function register (email,password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function login  (email,password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    function signInWithGoogle() {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }

        useEffect(() => {
            const onChangeState = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
            })
            return () => {
                onChangeState()
            }
        },[])
    

    return <UserAuthContext.Provider value={{login, register, user, logOut, signInWithGoogle}}>{children}</UserAuthContext.Provider>
}

    export function useUserAuth() {
        return useContext(UserAuthContext)
    }
