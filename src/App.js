// import logo from './logo.svg';
import './App.css';

import ApiData from './Components/ApiAccess';
// import SearchArtist from './Components/Search';
// import ListData from './Components/List';
import SongData from './Components/Spotify';
// import ArtistListData from './Components/ArtistList';
import PlayList from './Components/PlayList';
// import TrackList from './Components/ProcessList';
// import Track from './Components/Track';

function App() {
  return (
    <div className="App">
      <ApiData />
      <SongData />
      <PlayList/>
    
    </div>
  );
}

export default App;
