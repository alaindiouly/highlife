import './App.css';
import './css-reset.css';
import React, { useEffect , useState, createContext } from "react";
import ApiService from './ApiService';
import ReleaseList from "./containers/ReleaseList"
import Header from "./components/Header"
import Hero from "./components/Hero"
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
          <h2>{release.title}</h2>
          <p>Modal Body</p>
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
