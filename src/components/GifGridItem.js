import React from 'react'

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeInUp">
      <img src={url} alt={title}></img>
      <p>{title || '<<Sin nombre>>'}</p>
    </div>
  )
}
