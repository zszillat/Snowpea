import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createRecipe, updateRecipe } from '../../dbh';

const loggedInUserID = import.meta.env.VITE_USER_ID;

function AddRecipe() {
  const location = useLocation(); // Retrieve the state passed via navigation
  let r = location.state; // Recipe data passed from navigation
  
  const navigate = useNavigate(); // For navigation after submission

  // Initialize the form data state
  const [formData, setFormData] = useState({
    title: r?.title || "Untitled Recipe",
    prep_time: r?.prep_time?.toString() || "0",
    cook_time: r?.cook_time?.toString() || "0",
    ingredients: r?.ingredients || "",
    instructions: r?.instructions || "",
  });

  // Navigate back to the recipe list after submission
  const handleNavigate = (passthrough) => {
    navigate('/recipe', { state: passthrough });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let formDataToSubmit = {
      ...formData,
      prep_time: parseInt(formData.prep_time, 10),
      cook_time: parseInt(formData.cook_time, 10),
    };

    if (r) {
      try {
        const result = await updateRecipe(r.$id ,formDataToSubmit)
        if (result) {
          r.title = formDataToSubmit.title;
          r.prep_time = formDataToSubmit.prep_time;
          r.cook_time = formDataToSubmit.cook_time;
          r.ingredients = formDataToSubmit.ingredients;
          r.instructions = formDataToSubmit.instructions;
          handleNavigate(r);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        formDataToSubmit.googleAccount = loggedInUserID
        let result = await createRecipe(formDataToSubmit);
        if (result) {
          formDataToSubmit.$id = result.$id
          handleNavigate(formDataToSubmit);
        }
        
      } catch (error) {
        console.error('Error creating recipe:', error);
      }
    }
    
  };

  // Update form data on input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <>
      <div className="topbar">
        <div className='left'><img src="/src/images/left-arrow.svg" alt="Back Button" onClick={() => navigate("/")} className="icon" /></div>
        <div className='titlebar'><h1>Snowpea</h1></div>
        <div className='plus-icon'><img src="/src/images/check.svg" alt="" className="icon" /></div>
      </div>
    <form onSubmit={handleSubmit} className="add-recipe">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="prep_time">Prep Time</label>
      <input
        id="prep_time"
        value={formData.prep_time}
        onChange={handleChange}
      />

      <label htmlFor="cook_time">Cook Time</label>
      <input
        id="cook_time"
        value={formData.cook_time}
        onChange={handleChange}
      />

      <label htmlFor="ingredients">Ingredients</label>
      <textarea
        id="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
      />

      <label htmlFor="instructions">Instructions</label>
      <textarea
        id="instructions"
        value={formData.instructions}
        onChange={handleChange}
      />

      <button type="submit">Submit Recipe</button>
    </form>
    </>
  );
}

export default AddRecipe;
