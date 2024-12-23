import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RecipeList from './components/view_recipes/RecipeList';
import RecipeDetails from './components/recipe_details/RecipeDetails';
import Login from './components/Login';
import AddRecipe from './components/add_recipe/AddRecipe';

const checkAuthentication = () => {
  // Simulate an authentication check
  return true; //TODO Replace this with actual auth logic
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {

    const authStatus = checkAuthentication();
    setIsAuthenticated(authStatus);

  }, []);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <>
      <Routes>
        <Route path="/recipe" element={<RecipeDetails/>} />
        <Route path="/add" element={<AddRecipe/>} />
        <Route path="/" element={<RecipeList/>} />
      </Routes>
    </>
  );
}

export default App;
