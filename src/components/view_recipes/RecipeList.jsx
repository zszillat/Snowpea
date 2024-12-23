import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Recipe from './Recipe';
import { fetchRecipes } from '../../dbh';

// Component for displaying a list of recipes
const RecipeList = () => {
  const navigate = useNavigate(); // For navigation between routes

  // State for storing recipes and loading status
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Logged-in user ID (replace with actual authentication logic if applicable)
  const loggedInUserID = import.meta.env.VITE_USER_ID

  // Fetch recipes for the logged-in user on component mount
  useEffect(() => {
    const getRecipes = async () => {
      try {
        const fetchedRecipes = await fetchRecipes(loggedInUserID); // Fetch recipes from the database
        setRecipes(fetchedRecipes); // Update sta'6768a9390028f24b770e';te with the fetched recipes
      } catch (error) {
        console.error('Failed to load recipes:', error); // Handle errors during fetch
      } finally {
        setLoading(false); // Update loading state
      }
    };

    getRecipes();
  }, []);

  // Navigate to the recipe details page
  const handleNavigate = (r) => {
    navigate('/recipe', { state: r}); // Pass the selected recipe data to the details page
  };

  // Navigate to the Add Recipe page
  const handleAddRecipe = () => {
    navigate('/add');
  };

  // Show a loading indicator while data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render the list of recipes
  return (
    <>
      {/* Button to navigate to Add Recipe page */}
      <button onClick={handleAddRecipe}>Add Recipe</button>

      <h1>Recipes</h1>

      {/* Recipe list container */}
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div onClick={() => handleNavigate(recipe)} key={recipe.id} className="recipe-item">
            {/* Render individual recipe */}
            <Recipe
              id={recipe.id}
              title={recipe.title}
              prepTime={recipe.prep_time}
              cookTime={recipe.cook_time}
            />

            {/* Button to view recipe details */}
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeList;
