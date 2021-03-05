import './App.css';
import './css-reset.css';
import React, { useEffect , useState, createContext } from "react";
import ApiService from './ApiService';
import ReleaseList from "./containers/ReleaseList"
import Header from "./components/Header"
import Hero from "./components/Hero"


const moods = {
  happy: 'happy',
  sad: 'sad'
}

export const MoodContext = createContext(moods);

function App() {
  const [releases, setReleases] = useState([]);

  useEffect(()=> {
    ApiService.getSearch()
    .then(res => {
      const selectedReleases = res.results;
      setReleases(selectedReleases)
      return selectedReleases;
    })
  }, []);

  const handleClick = (release) => {

    const clone = releases.map(el=>el.id);
    console.log(clone);
    // if (clone.includes(movie.id)) {
    //   const temp = selectedMovies.filter(el=> el.id!==movie.id);
    //   setSelectedMovies(temp);
    // } else {
    //   setSelectedMovies([...selectedMovies, movie])
    // }

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
    </div>
  );
}

export default App
