import React from 'react'
import Recipe from './Recipe'

function RecipeList({ id }) {
  return (

    

    <>
      <h1>Recipes</h1>
      <div className="recipe-list">
      <Recipe 
          id={1}
          title={"Chicken Scampi"}
          prepTime={40}
          cookTime={120}
        />
    </div>
    </>

  )
}

export default RecipeList