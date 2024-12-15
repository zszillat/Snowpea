import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails';
import Login from './components/Login';
import AddRecipe from './components/AddRecipe';

function App() {
  const [count, setCount] = useState(0)

  const isAuthenticated = true; //TODO Implement Actual Auth Here
  const recipeID = 1;

  if (isAuthenticated) {
    return (
      <>
        <Routes>
          <Route path="/recipe" element={<RecipeDetails id={recipeID}/>}/> 
          <Route path="/add" element={<AddRecipe id={recipeID}/>}/>
        </Routes>
      </>
    )
  } else {
    return (
      <Login />
    )
  }


}

export default App
