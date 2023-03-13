import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";

const userAuthContext = createContext();



export function UserAuthContextProvider({children}) {

    const [user, setUser] = useState({});


    function signUp(email,password){
        return createUserWithEmailAndPassword(auth, email, password);
    }


    function login(email,password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    function adminLogin(email,password) {
        return signInWithEmailAndPassword(auth, email, password);        
    }

    function logout(){
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }    
    }, []);


    const value = {
        user,
        signUp,
        login,
        logout
    }
    




    return (<userAuthContext.Provider value={value}>{children}</userAuthContext.Provider>)
}

export function useUserAuth(){
    return useContext(userAuthContext)
}