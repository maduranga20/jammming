import React, { Component } from 'react'
import SearchArtist from './Search';

export default class SongData extends Component {

  constructor() {
    super();
    this.state = {
        spotifyData: [],
    };
    this.number = {};
    this.Search=this.Search.bind(this);
}

  async Search(name) {
    const toObject = localStorage.getItem("accessToken");
   
    console.log(name);
    
    // Michael
    const singerName = name;
    const artistData = await fetch(`https://api.spotify.com/v1/search?type=artist&q=${singerName}`, JSON.parse(toObject));

    const musicData = await artistData.json();
    const dataArtist = musicData.artists;
    this.setState({ spotifyData: dataArtist })


    this.number = dataArtist;
}
componentDidMount() {
 
    // this.Search();
    
}

// artistInfo(name){
//   console.log(name);
// }
  render() {
    console.log(this.state.spotifyData);
    
    return (
      <div>SongData
          <SearchArtist info={ this.Search}/>
      </div>
      
    )
  }
}
