import React from 'react'
import { useLocation } from 'react-router-dom'

const RecipeDetails = () => {

    const location = useLocation();
    const { key, recipe } = location.state || {};
    console.log(recipe.ingredients)

  return (
        <div className='recipe-details'>
            <div className="recipe-title">
                <h1>{recipe.title}</h1>
            </div>

            <div className="prep-time">
                <p>Prep Time: </p>
                <p>{recipe.prep_time}</p>
            </div>

            <div className="cook-time">
                <p>Cook Time: </p>
                <p>{recipe.cook_time}</p>
            </div>

            <div className="ingredients">
                <h2>Ingredients:</h2>
                {recipe.ingredients ? (
                    <div className="ingredient-list">
                    {Object.entries(recipe.ingredients).map(([key, ingredient]) => (
                        <div key={key} className="ingredient">
                        <p>{key} : {ingredient}</p>
                        </div>
                    ))}
                    </div>

                ) : (
                    <p>No ingredients found.</p>
                )}
            </div>

            <div className="instructions">
                <h2>Ingredients:</h2>
                {recipe.instructions ? (
                    <div className="instruction-list">
                    {Object.entries(recipe.instructions).map(([key, instruction]) => (
                        <div key={key} className="instruction">
                        <p>{key} : {instruction}</p>
                        </div>
                    ))}
                    </div>

                ) : (
                    <p>No ingredients found.</p>
                )}
            </div>
        </div>
        
  )
}

export default RecipeDetails