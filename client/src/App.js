import './App.css';
import './css-reset.css';
import React, { useEffect , useState} from "react";
import ApiService from './ApiService';
import ReleaseList from "./containers/releaseList/ReleaseList"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Modal from 'react-modal'

Modal.setAppElement('#root');


function App() {

  const initialRelease = {
    country: '',
    cover_image: '',
    title: '',
    id: 0,
    year: '',
    label: [''],
    community: {
      have: 0,
      want: 0
    }
  }

  const [releases, setReleases] = useState([]);
  const [modalIsOpen, setmodalisOpen] = useState(false);
  const [releaseState, setreleaseState] = useState(initialRelease);

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
    setreleaseState(prevState => {return {...prevState, ...release}});
    // setreleaseState(release);
    // setreleaseState({...initialRelease, ...release});
  }

  const closeModal = () => {
    setmodalisOpen(false);
  }

  return (
    <div className="App">
        <Header/>
        <Hero/>
        <div className="App__navbar">NAVBAR</div>
        <h1>AFROBEAT IS HERE!</h1>
        <div className="list">
          <ReleaseList
            id="list"
            releases={releases}
            handleClick={handleClick}
          ></ReleaseList>
        </div>
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
                  src={releaseState.cover_image}
                  alt="" className="cover__image"
                />
              </div>
              <div className="content__details">
                <p>{releaseState.year}</p>
                <p>{releaseState.label[0]}</p>

                <h1>{releaseState.title}</h1>
                <p>{releaseState.country}</p>

                <button className="details--add-collection">ADD TO COLLECTION</button>
                <p>Have: {releaseState.community.have}</p>
                <p>Want: {releaseState.community.want}</p>
              </div>
            </div>
            <div className="wrapper__video">{releaseState.title}
            </div>
          </div>
          <div className="modal__button">
            <button
            // onClick={()=> setmodalisOpen(false)}
            onClick={()=> closeModal()}
            className="modal--close">
             X
            </button>
          </div>
        </Modal>
    </div>
  );
}

export default App
