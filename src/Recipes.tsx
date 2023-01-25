import React from 'react'
import { Link } from 'react-router-dom'
import { recipes } from './data'

export default function Recipes(){
  return(
    <div className='my-4 px-4 text-center'>
      <h1 className='text=gray-600 text-xl mb-2'>Recipes</h1>
      <div className='ul'>
        {
          recipes.map(recipe => (
            <Card
              key={recipe.slug}
              title={recipe.title}
              slug={recipe.slug}
            />
          ))
        }
      </div>
    </div>
  )
}

function Card({ title, slug}){
  return(
    <div>
      <Link to={`/recipes/${slug}`}>{title}</Link>
    </div>
  )
}