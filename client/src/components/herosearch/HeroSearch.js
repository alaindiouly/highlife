import './HeroSearch.css';
import hero from '../../speaker-cropped.jpg'


function HeroSearch () {
  return (
    <div className="hero">
      {/* <div className="header__search">SEARCH</div> */}
      <img src={hero} alt="hero" className="hero__logo"/>
      {/* <div className="header__collection">COLLECTION</div> */}
    </div>
  );
}

export default HeroSearch;