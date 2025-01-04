import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom';

const Nav = () => {
  const { user, logout } = UserAuth()

  const handleSignOut = async () => {
    try {
      await logout()
    } catch (e) { console.log(e) }
  }

  return (
    <nav>
        <div></div>
        <div><h1>Snowpea</h1></div>
        <div>
          {user?.displayName ? <button onClick={handleSignOut}>Logout</button> : <Link to='/login'>Log In</Link>}
        </div>
    </nav>
  );
}

export default Nav