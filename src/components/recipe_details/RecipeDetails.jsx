import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { deleteRecipe } from '../../dbh';
import { useState } from 'react';

const loggedInUserID = import.meta.env.VITEUSER_ID;

function RecipeDetails({ id }) {
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    let r = location.state;

    if (!r) {
        return <p>No recipe data found.</p>;
    }

    const ingredients = r.ingredients.split("\n");
    const instructions = r.instructions.split("\n");

    const handleNavigate = (r) => {
        navigate('/add', { state: r });
    };

    const handleDelete = async (id) => {
      try {
        const result = await deleteRecipe(id);
        setDocuments((prev) => prev.filter((doc) => doc.$id !== id));
        if (result) {
          navigate("/")
        }
      } catch (error) {
        console.error('Failed to delete document:', error);
      }
    };
    
    return (
      <>
      <button onClick={() => navigate("/")}>back</button>
      <section className="recipe-details">
        <button onClick={() => handleNavigate(r)}>EDIT</button>
        <h1>{r.title}</h1>
        <p>Recipe ID: {r.$id}</p>
        <p>Prep Time: {r.prep_time} minutes</p>
        <p>Cook Time: {r.cook_time} minutes</p>

        <hr />

        <h5>Ingredients</h5>
        <ul>
            {ingredients.map((i, index) => (
                <li key={index}>{i}</li>
            ))}
        </ul>

        <hr />

        <h5>Instructions</h5>
        <ul>
            {instructions.map((i, index) => (
                <li key={index}>{i}</li>
            ))}
        </ul>
        <button onClick={() => handleDelete(r.$id)}>|||DELETE|||</button>
      </section>
      </>
    );
}

export default RecipeDetails;
