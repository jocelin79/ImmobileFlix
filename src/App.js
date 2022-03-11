import React, { useEffect, useState } from 'react'
import './App.css'
import tmdb from './tmdb'
import MovieR from './components/MovieR'
import FeaturedMovie from './components/FeaturedMovie'

export default () => {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setfeaturedData] = useState(null)

  useEffect(() => {
    const loudAll = async () => {
      //Pegando a lista Total
      
      let list = await tmdb.getHomeList()
      setMovieList(list)

      //Pegando o featured
      let top_rated = list.filter(i => i.slug === 'top_rated')
      let randomChosen = Math.floor(
        Math.random() * (top_rated[0].items.results.length - 1)
      )
      let chosen = top_rated[0].items.results[randomChosen]
      setfeaturedData(chosen)
    }

    loudAll()
  }, [])
  return (
    <div className="page">
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieR key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <p>Feito por Jocelin Nunes.
        Dados do site Themovinedb.org</p>
        <img src={"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"} alt={"tmdg logo"}></img>
      </footer>


      {movieList.length <= 0 &&<div className="loading">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" alt="loading"></img>
      </div>}
    </div>
  )
}
