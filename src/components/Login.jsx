import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (e) { console.log(e)}
  };

  useEffect(() => {
    if (user != null) {
      navigate('/recipes')
    }
  }, [user]);

  return (
    <>
        <div>Login</div>
        <GoogleButton onClick={handleGoogleSignIn} />
    </>

  )
}

export default Login