import React from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
import {app} from "../firebase.js"
import { useDispatch } from 'react-redux';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice.js';
import { useNavigate } from 'react-router-dom';

export default function Auth() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = async() => {
      try {
        const provider = new GoogleAuthProvider();

        const auth = getAuth(app);

        const result = await  signInWithPopup(auth, provider);

        // console.log((res));
        
        const res = await fetch('/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name : result.user.displayName, 
            email : result.user.email,
            photo : result.user.photoURL
          }),
        });

        const data = res.json();
        dispatch(signInSuccess(data));
        console.log(data);  
        navigate('/');
      } 
      catch (error) {
        console.log("could not sign in with google", error);   
      }

    } 
  return (
    <button type = "button" onClick={handleClick} className='bg-red-700 text-white 
      p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
        Continue with Google
    </button>
  );
}
