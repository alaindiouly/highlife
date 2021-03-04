import ReleaseItem from '../components/ReleaseItem'
import './ReleaseList.css'


function ReleaseList ( {releases} ) {

  const allReleases = releases.map((release)=>
    <ReleaseItem
      className="item"
      key={release.id}
      release={release}
      />
  );

  return (
    <div className="releaseList">
      {allReleases.slice(0,19)}
    </div>
  );
}

export default ReleaseList;