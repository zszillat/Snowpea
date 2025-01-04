import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Account from './components/Account'
import { AuthContextProvider } from './context/AuthContext'
import Protected from './components/Protected'

function App() {

  return (
    <>
      <AuthContextProvider >
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/account' element={
            <Protected>
              <Account />
            </Protected>
          }></Route>
        </Routes>
      </AuthContextProvider>

    </>
  )
}

export default App
