import React, { useState, useEffect } from "react";
import { GetRecipes } from "../../dbh";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState(null); // State to store recipes
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State to handle errors

  const navigate = useNavigate();

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const fetchedRecipes = await GetRecipes();
        setRecipes(fetchedRecipes); // Store recipes in state
      } catch (err) {
        setError("Failed to fetch recipes");
        console.error(err);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    loadRecipes();
  }, []); // Empty dependency array ensures it runs once after the component mounts

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Recipes</h1>
      {recipes ? (
        <div className="recipe-list">
          {Object.entries(recipes).map(([key, recipe]) => (
            <div key={key} className="recipe" onClick={() => {
              navigate('/recipe-details', { state: { key, recipe } });
            }}>
              <strong>{recipe.title}</strong>: {recipe.description}
            </div>
          ))}
        </div>

      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default Recipes;
