import React, { useEffect } from 'react'

function Recipe({ id, title, prepTime, cookTime }) {

  return (
    <>
        <h1>{title}</h1>
        <p>Prep Time: {prepTime} Minutes</p>
        <p>Cook Time: {cookTime} Minutes</p>
    </>
  )
}

export default Recipe