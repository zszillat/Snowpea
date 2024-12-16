import React from 'react'

function RecipeDetails({ id }) {
    return (
      <div className="recipe-details">
        <h1>Easy Chicken Scampi Recipe</h1>
        <p>Recipe ID: {id}</p>
        <p>Prep-Time: 20 minutes</p>
        <p>Cook Time: 10 minutes</p>

        ---

        <h5>Ingredients</h5>
        <ul>
          <li>"Angel Hair Pasta":"1 lbs"</li>
          <li>"Chicken Tenderloins":"4 Breasts Thinly Sliced"</li>
          <li>"All-Purpose Flour":"2 Cups",</li>
          <li>"Italian Seasoning":"1 tsp",</li>
          <li>"Salt":"1 Pinch",</li>
          <li>"Pepper":"1 Pinch",</li>
          <li>"Garlic":"1 Clove"</li>
          <li>"Red Onion":"1/2",</li>
        </ul>

        ---

        <h5>Instructions</h5>
        <ul>
          <li>"AIn a medium-sized saucepot, boil water and salt it. Add your pasta, and cook according to the package instructions. When the pasta is cooked, reserve 1 cup of the pasta water and drain the pasta.</li>
          <li>"Chicken Tenderloins":"4 Breasts Thinly Sliced"</li>

        </ul>
      </div>
    );
  }
  
  export default RecipeDetails;
  