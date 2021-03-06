import './App.css';
import './css-reset.css';
import React, { useEffect , useState, createContext } from "react";
import ApiService from './ApiService';
import ReleaseList from "./containers/releaseList/ReleaseList"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Modal from 'react-modal'

Modal.setAppElement('#root');


// REMOVE
const moods = {
  happy: 'happy',
  sad: 'sad'
}
export const MoodContext = createContext(moods);

function App() {
  const [releases, setReleases] = useState([]);
  const [modalIsOpen, setmodalisOpen] = useState(false);
  const [release, setRelease] = useState("");

  useEffect(()=> {
    ApiService.getSearch()
    .then(res => {
      const selectedReleases = res.results;
      setReleases(selectedReleases)
      return selectedReleases;
    })
  }, []);

  const handleClick = (release) => {
    setmodalisOpen(true);
    setRelease(release);
    console.log(release);
  }

  return (
    <div className="App">
        <Header/>
        <Hero/>
        <div className="App__navbar">NAVBAR</div>
        <h1>AFROBEAT IS HERE!</h1>
        <MoodContext.Provider value={moods.happy}>
          <div className="list">
            <ReleaseList
              id="list"
              releases={releases}
              handleClick={handleClick}
            ></ReleaseList>
          </div>
        </MoodContext.Provider>
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

                <h1>{release.title}</h1>

                <button className="details--add-collection">ADD TO COLLECTION</button>



              </div>
            </div>
            <div className="wrapper__video">{release.title}

            </div>
          </div>
          <div className="modal__button">
            <button
            onClick={()=> setmodalisOpen(false)} className="modal--close">
             X
            </button>
          </div>
        </Modal>
    </div>
  );
}

export default App
