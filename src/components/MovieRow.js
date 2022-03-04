import React, { useState } from 'react'
import './MovieRow.css'

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

  const [openModel, setOpenModel] = useState(false)

  const [movie_title, setMovie_title] = useState('')

  const [vote, setVote] = useState('')

  const [date, setDate] = useState('')

  const [description, setDescription] = useState('')

  const [backdrop, setBackdrop] = useState('')

  let year = new Date(date)

  const handleCloseModel = () => {
    setOpenModel(false)
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow_left">
        <img
          src="/assets/circle-left.svg"
          alt="seta para esquerda"
          onClick={handleLeftArrow}
        ></img>
      </div>
      <div className="movieRow_right">
        <img
          src="/assets/circle-right.svg"
          alt="seta para direita"
          onClick={handleRightArrow}
        ></img>
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
                    setMovie_title(item.title)
                    setVote(item.vote_average)
                    setDate(item.release_date)
                    setDescription(item.overview)
                    setBackdrop(item.backdrop_path)
                    setOpenModel(true)
                  }}
                />
                <div
                  className={
                    openModel ? 'modal-wrapper-active' : 'modal-wrapper'
                  }
                >
                  <div
                    className="modal_container"
                    style={{
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop})`
                    }}
                  >
                    <div className="modal_vertical">
                      <div className="modal_horizontal">
                        <div className="modal_box">
                          <div className="modal_header">
                            <div className="modal_name">{movie_title}</div>
                            <button className="close" onClick={handleCloseModel}>
                              <img src="/assets/cancel-circle.svg" alt="close"></img>
                              </button> 
                          </div>
                          <div className="modal_info">
                            <div className="modal_vote">{vote} pontos</div>
                            <div className="modal_release">
                              {year.getFullYear()}
                            </div>
                          </div>
                        </div>
                        <div className="modal_description">
                          {description.length > 350
                            ? description.substring(0, 350) + '...'
                            : description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
