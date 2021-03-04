import './ReleaseItem.css';

function ReleaseItem ({release}) {
  //TO DO: link the release id to the artist(s)

  return (
    <div className="wrapper">
      <img src={release.cover_image} alt="" className="cover"/>
      <div className="title">
        {release.title}
      </div>
      <div className="label">
        {release.label[0]}
      </div>
      <div className="year">
        {release.year}
      </div>
      <div className="country">
        {release.country}
      </div>
      <div className="have">
        {release.community.have}
      </div>
      <div className="want">
        {release.community.want}
      </div>
    </div>
  );
}

export default ReleaseItem;