import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import GoogleButton from 'react-google-button';
import './Login.css'
!firebase.apps.length?
firebase.initializeApp(firebaseConfig):
firebase.app()

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({})
    const history= useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var {displayName, email, photoURL} = result.user;
            const signedInUser = {displayName, email, photoURL}
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.push(from);
            // ...
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            // ...
            setLoggedInUser(errorMessage);
            console.log(errorCode, errorMessage, email, credential);
        });
    } 
    return (
        <div className='text-center mt-1 login'>
            <h3 className="text-white">Please Sign in with your Gmail Account</h3>
           <div className="btn">
           <GoogleButton type="light" onClick={handleGoogleSignIn}/>
           </div>
        </div>
    );
};

export default Login;