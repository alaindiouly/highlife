import './Header.css';
import logo from '../discogs-white.png'

console.log(logo);

function Header () {
  return (
    <div className="header">
      <div className="header__search">SEARCH</div>
      <img src={logo} alt="logo" className="header__logo"/>
      <div className="header__collection">COLLECTION</div>
    </div>
  );
}

export default Header;