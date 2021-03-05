import ReleaseItem from '../components/ReleaseItem'
import './ReleaseList.css'
import React, { useContext } from "react";
import {MoodContext} from '../App'


function ReleaseList ( {releases, handleClick} ) {

  const mood = useContext(MoodContext);


  const allReleases = releases.map((release)=>
    <ReleaseItem
      className="item"
      key={release.id}
      release={release}
      handleClick={handleClick}
      />
  );


  return (
    <div className="releaseList">
        {mood}
      {allReleases.slice(0,19)}
    </div>
  );
}

export default ReleaseList;