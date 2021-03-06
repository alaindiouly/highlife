import ReleaseItem from '../../components/releaseItem/ReleaseItem'
import './ReleaseList.css'
import React, { useContext } from "react";
import {MoodContext} from '../../App'


function ReleaseList ( {releases, handleClick} ) {

  //REMOVE
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
      {allReleases.slice(0,19)}
    </div>
  );
}

export default ReleaseList;