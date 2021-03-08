import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root');

function ReleaseModal({release, modalIsOpen, setmodalisOpen}) {

  const closeModal = () => {
    setmodalisOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={()=> setmodalisOpen(false)} className="modal"
      style={
        {
          overlay: {
            backgroundColor:'grey',
            opacity: 0.8
          },
          content: {
            color: 'black'
          }
        }
      }
    >
      <div className="wrapper">
        <div className="wrapper__content">
          <div className="content__cover">
            <img
              src={release.cover_image}
              alt="" className="cover__image"
            />
          </div>
          <div className="content__details">
            <p>{release.year}</p>
            <p>{release.label[0]}</p>
            <h1>{release.title}</h1>
            <p>{release.country}</p>
            <button className="details--add-collection">ADD TO COLLECTION</button>
            <p>Have: {release.community.have}</p>
            <p>Want: {release.community.want}</p>
          </div>
        </div>
        <div className="wrapper__video">
          {release.title}
        </div>
        <div className="wrapper__button">
          <button
            onClick={()=> closeModal()}
            className="wrapper--close">
             X
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ReleaseModal
