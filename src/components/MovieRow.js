import React from 'react'
import './MovieRow.css'

export default ({title, items}) => {
  return (
    <div>
      <h2>{title}</h2>
      {console.log(items.results)}
      <div className="movieRow_listarea">
        <div className="movieRow_list">
        {items.results.length > 0 &&
          items.results.map((item, key) => (
            <div className="movieRow_item">
              <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
