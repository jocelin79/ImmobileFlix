import React from 'react'
import './FeaturedMovie.css'

export default ({item}) => {
  let year = new Date(item.release_date);

  let description = item.overview;
  if(description.length > 200) {
    description = description.substring(0, 200)+'...';
  }
  

  return (
    <section className="featured" style={{backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
      <div className="featured_vertical">
        <div className="featured_horizontal">
          <div className="featured_name">{item.title}</div>
          <div className="featured_info">
            <div className="featured_vote">{item.vote_average} pontos</div>
            <div className="featured_release">{year.getFullYear()}</div>
          </div>
          <div className="featured_description">
            {description}
          </div>
        </div>
      </div>
    </section>
  )
}
