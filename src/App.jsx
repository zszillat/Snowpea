import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Homepage from './components/Homepage'
import Login from './components/Login'
import Account from './components/Account'
import { AuthContextProvider, UserAuth } from './context/AuthContext'
import Protected from './components/Protected'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import Recipes from './components/recipes/Recipes'
import RecipeDetails from './components/recipes/RecipeDetails'
import { AddRecipe } from './dbh'
import RecipeAdd from './components/recipes/RecipeAdd'

function App() {

  return (
    <>
      <AuthContextProvider >
        <Nav />
        <Routes>
          <Route path='/login' element={<Login />}></Route>

          {/* Protected */}
          <Route path='/' element={<Protected><Navigate to='/login' /></Protected>}></Route>
          <Route path='/account' element={<Protected><Account /></Protected>}></Route>
          <Route path='/recipes' element={<Protected><Recipes /></Protected>}></Route>
          <Route path='/recipe-details' element={<Protected><RecipeDetails /></Protected>}></Route>
          <Route path='/recipe-add' element={<Protected><RecipeAdd /></Protected>}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
