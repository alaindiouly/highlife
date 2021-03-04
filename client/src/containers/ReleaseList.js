import ReleaseItem from '../components/ReleaseItem'
import './ReleaseList.css'
import React, { useContext } from "react";
import {MoodContext} from '../App'


function ReleaseList ( props ) {

  const mood = useContext(MoodContext);
  console.log(mood);

  const allReleases = props.releases.map((release)=>
    <ReleaseItem
      className="item"
      key={release.id}
      release={release}
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