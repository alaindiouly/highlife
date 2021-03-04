import './ReleaseItem.css';

function ReleaseItem ({release}) {
  //TO DO: link the release id to the artist(s)

  return (
    <div className="release">
      <img src={release.cover_image} alt="" className="release__cover"/>
      <div className="title">
        {release.title}
      </div>
      {/* <div className="label">
        {release.label[0]}
      </div> */}
      <div className="year">
        {release.year}
      </div>
      {/* <div className="country">
        {release.country}
      </div> */}
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