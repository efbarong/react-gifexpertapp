import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGifs(category);

  return (
    <>
      <h2 className="animate__animated animate__fadeInUp">{category}</h2>
      {
        loading && <p className="animate__animated animate__flash">Cargando...</p>
      }
      {
        !loading && data.length === 0 && <h3 className="animate__animated animate__flipInX">No hay resultados</h3>
      }
      <div className="cardGrid">
        {
          data.map((img, index) => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  )
}
