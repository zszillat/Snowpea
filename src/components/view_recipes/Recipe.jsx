import React, { useEffect } from 'react'

function Recipe({ id, title, prepTime, cookTime }) {

  return (
    <div className="recipe">
        <p>{title}</p>
        <p>Prep Time: {prepTime}</p>
        <p>Cook Time: {cookTime}</p>
    </div>
  )
}

export default Recipe