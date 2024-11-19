// import logo from './logo.svg';
import './App.css';

import ApiData from './Components/ApiAccess';
// import SearchArtist from './Components/Search';
// import ListData from './Components/List';
import SongData from './Components/Spotify';
// import ArtistListData from './Components/ArtistList';

function App() {
  return (
    <div className="App">
      <ApiData/>
      <SongData/>
    </div>
  );
}

export default App;
