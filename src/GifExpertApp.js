import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto']);
  console.log(categories);

  return (
    <>
      <div className="center">
        <h1>BuscaGifs | Ewardo</h1>
        <AddCategory setCategories={setCategories} />
        <h3>Resultados</h3>
        <ol>
          {
            categories.map((cat) => (
              <GifGrid key={cat}
                category={cat} />
            ))
          }
        </ol>
      </div>



    </>
  )
}
