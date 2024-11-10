// import logo from './logo.svg';
import './App.css';

import ApiData from './Components/ApiAccess';
import SearchArtist from './Components/Search';
function App() {
  return (
    <div className="App">
      <ApiData/>
      <SearchArtist/>
    </div>
  );
}

export default App;
