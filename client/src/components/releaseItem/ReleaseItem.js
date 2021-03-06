import './ReleaseItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

function ReleaseItem ({release, handleClick}) {

  return (
    <div className="release" onClick={() => handleClick(release)}>

      <img
        src={release.cover_image}
        alt="" className="release__cover release--icon"

      />
      <FontAwesomeIcon icon={faEye}
        className="add--icon"
      />
      <div className="title">
        {release.title}
      </div>
      <div className="year">
        {release.year}
      </div>
      <div className="release__community">
        <div className="have">
          Have:
          {release.community.have+" "}
          Want:
          {release.community.want}
        </div>
       </div>
    </div>
  );
}

export default ReleaseItem;