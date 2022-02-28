import React, { useEffect, useState } from 'react'
import './App.css'
import tmdb from './tmdb'
import MovieRow from './components/MovieRow'

export default () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loudAll = async () => {
      let list = await tmdb.getHomeList()
      setMovieList(list)
    }

    loudAll()
  }, [])
  return (
    <div className="page">
      <h1>IMMOBIFLIX</h1>
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  )
}