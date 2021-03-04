import './App.css';
import './css-reset.css';
import React, { useEffect , useState, createContext } from "react";
import ReleaseList from "./containers/ReleaseList"
import ApiService from './ApiService';

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

  return (
    <div className="App">
        <h1>HEADERS</h1>
        <h1>HERO</h1>
        <h1>NAVBAR</h1>
        <h1>AFROBEAT IS HERE!</h1>
        <MoodContext.Provider value={moods.happy}>
          <div className="list">
            <ReleaseList id="list" releases={releases}/>
          </div>
        </MoodContext.Provider>
    </div>
  );
}

export default App
