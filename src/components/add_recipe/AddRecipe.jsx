import React from 'react'

function populateForm() {
  //TODO populate function
}

function AddRecipe({ id }) {

    const isEdit = false;

    let defaults = {
      title:"Untitled Recipe",
      prepTime:"0",
      cookTime:"0",
      ingredients:"",
      instructions:""
    }

    if (isEdit) {
      populateForm();
    }

    return (
      <form action="" className="add-recipe">
        <label htmlFor="inputRecipeTitle">Title</label>
        <input id="inputRecipeTitle" value={defaults.title}></input>
        
        <label htmlFor="inputRecipePrepTime">Prep Time</label>
        <input id="inputRecipePrepTime" value={defaults.prepTime}></input>

        <label htmlFor="inputRecipeCookTime">Cook Time</label>
        <input id="inputRecipeCookTime" value={defaults.cookTime}></input>
        
        <label htmlFor="inputRecipeIngredients">Ingredients</label>
        <textarea id="inputRecipeIngredients" value={defaults.ingredients}></textarea>

        <label htmlFor="inputRecipeInstructions">Instructions</label>
        <textarea id="inputRecipeInstructions" value={defaults.instructions}></textarea>
      </form>
    );
  }

export default AddRecipe

