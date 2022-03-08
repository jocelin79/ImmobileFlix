import React from 'react'
import './Modal.css'

export default ({handleCloseModal = () => {}, movie_title, vote, date, description, backdrop}) => {

  let year = new Date(date)

  return (
    <div className="modal-wrapper">
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
                <button className="close" onClick={handleCloseModal}>
                  <img src="/assets/cancel-circle.svg" alt="close" />
                </button>
              </div>
              <div className="modal_info">
                <div className="modal_vote">{vote} pontos</div>
                <div className="modal_release">{year.getFullYear()}</div>
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
  )
}
