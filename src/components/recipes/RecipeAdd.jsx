import React from 'react'
import { AddRecipe } from '../../dbh'
import { UserAuth } from '../../context/AuthContext'

const RecipeAdd = () => {

  const { logout, user } = UserAuth();

  const handleLogin = async () => {


    AddRecipe({
      cook_time:20,
      ingredients:{
          chicken:"2 minutes",
          turkey: "turkey i guess?"
      },
      instructions: {
          1:"hi?",
          2:"hello",
          3:"greetings",
          4:"salutations"
      },
      prep_time:222,
      source:"",
      title:"food recipe lol",
      user:user.email
    })
  }

  const handleSubmit = (e) => {

  }

  return (
  <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="recipeTitle">Recipe Title</label>
      <input type="text" id='recipeTitle' />
      <br/>
      <label htmlFor="recipeCookTime">Prep Time</label>
      <input type="text" id='recipeCookTime' />
      <br/>
      <label htmlFor="recipeCookTime">Recipe Cook Time</label>
      <input type="text" id='recipeCookTime' />

      <button type="submit">
            Add Recipe
      </button>
    </form>

  </>

  )
}

export default RecipeAdd