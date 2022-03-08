import React, { useState } from 'react'
import Modal from './Modal'
import './MovieR.css'

export default ({ title, items }) => {

  const [scrollX, setScrollX] = useState(0)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth * 0.75)
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
  }
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth * 0.75)
    if (window.innerWidth - items.results.length * 200 > x) {
      x = window.innerWidth - items.results.length * 200 - 60
      // Esse 60 é do padding.
    }
    setScrollX(x)
  }

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow_left">
        <img
          src="/assets/circle-left.svg"
          alt="seta para esquerda"
          onClick={handleLeftArrow}
        />
      </div>
      <div className="movieRow_right">
        <img
          src="/assets/circle-right.svg"
          alt="seta para direita"
          onClick={handleRightArrow}
        />
      </div>
      <div className="movieRow_listarea">
        <div
          className="movieRow_list"
          style={{ marginLeft: scrollX, width: items.results.length * 200 }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow_item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.title}
                  onClick={() => {
                    setOpenModal(true)
                  }}
                />
                {openModal ? <Modal handleCloseModal={() => setOpenModal(false)} movie_title={item.title} vote={item.vote_average} date={item.release_date} description={item.overview} backdrop={item.backdrop_path}/> : null}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
