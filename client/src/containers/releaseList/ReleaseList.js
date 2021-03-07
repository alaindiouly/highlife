import ReleaseItem from '../../components/releaseItem/ReleaseItem'
import './ReleaseList.css'


function ReleaseList ( {releases, handleClick} ) {


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