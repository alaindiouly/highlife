import './Landing.css';
import React, { useEffect , useState} from "react";
import ApiService from '../../ApiService';
import Navbar from "../../components/navbar/Navbar";
import HeroSearch from "../../components/herosearch/HeroSearch";
import SearchResult from "../searchresult/SearchResult";
import ReleaseModal from '../modal/ReleaseModal';


function Landing() {

  const initialRelease = {
    country: '',
    cover_image: '',
    title: '',
    id: 0,
    year: '',
    label: [''],
    community: {
      have: 0,
      want: 0
    }
  }

  // TODO : SEARCH BY ARTIST > API REQUEST

  const [releases, setReleases] = useState([]);
  const [modalIsOpen, setmodalisOpen] = useState(false);
  const [releaseState, setreleaseState] = useState(initialRelease);

  useEffect(()=> {
    ApiService.getSearch()
    .then(res => {
      const selectedReleases = res.results;
      setReleases(selectedReleases)
      return selectedReleases;
    })
  }, []);

  const handleClick = (release) => {
    setmodalisOpen(true);
    setreleaseState(prevState => {return {...prevState, ...release}});
    // setreleaseState(release);
    // setreleaseState({...initialRelease, ...release});
  }

  return (
    <div className="Landing">
        <Navbar/>
        <HeroSearch/>
        <div className="Landing__navbar">CARROUSSEL</div>
        <div className="list">
          <SearchResult
            id="list"
            releases={releases}
            handleClick={handleClick}
          ></SearchResult>
        </div>
        <ReleaseModal
          release={releaseState}
          // handleClick={handleClick}
          modalIsOpen={modalIsOpen}
          setmodalisOpen={setmodalisOpen}
        >
        </ReleaseModal>
    </div>
  );
}

export default Landing
