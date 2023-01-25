import React from 'react'
import { useParams } from 'react-router-dom'
import { recipes } from './data'

export default function Recipe(){
  const { slug } = useParams()
  const recipe = recipes.find( recipe => recipe.slug === slug )
  return(
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
    </div>
  )
}