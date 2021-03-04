import './App.css';
import './css-reset.css';
import React, { useEffect , useState } from "react";
import ReleaseList from "./containers/ReleaseList"
import ApiService from './ApiService';


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



      <div className="list">
        <ReleaseList id="list" releases={releases}/>
      </div>

    </div>
  );
}

export default App;
