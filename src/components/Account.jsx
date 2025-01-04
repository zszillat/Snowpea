import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
  const { logout, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logout()
    } catch (e) { console.log(e) }
  }

  return (
    <>
      <h1>Welcome, {user?.displayName}</h1>
      <button onClick={handleSignOut}>logout</button>
    </>

  )
}

export default Account