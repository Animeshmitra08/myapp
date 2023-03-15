import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";

const userAuthContext = createContext();



export function UserAuthContextProvider({children}) {

    const [user, setUser] = useState({});
    const [us, setUs] = useState({});


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
        const unsub = onAuthStateChanged(auth, (currentUser)=>{
            setUs(currentUser);
        });
        return ()=>{
            unsubscribe();
            unsub();
        }    
    }, []);


    const value = {
        user,
        adminLogin,
        signUp,
        login,
        logout,
        us
    }
    




    return (<userAuthContext.Provider value={value}>{children}</userAuthContext.Provider>)
}

export function useUserAuth(){
    return useContext(userAuthContext)
}