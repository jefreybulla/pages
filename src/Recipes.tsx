import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { recipes } from './data'
import Recipe from './Recipe'

export default function Recipes(){

  function RecipeList(){
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
  return(
    <>
      <Routes>
        <Route path='/' element={<RecipeList />}/>
        <Route path='/recipes/:slug' element={<Recipe />}/>
      </Routes>
    </>

  )
}

function Card({ title, slug}){
  // When using Link, keep in mind you should use the full relative path
  return(
    <div>
      <Link to={`/recipe-home/recipes/${slug}`}>{title}</Link>
    </div>
  )
}