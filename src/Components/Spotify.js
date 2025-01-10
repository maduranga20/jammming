import React, { Component } from 'react'
import SearchArtist from './Search';
import TrackList from './ProcessList';
// import "./Style/spotify.css";

export default class SongData extends Component {

  constructor() {
    super();
    this.state = {
      jsonResponse: [],
    };
    this.Search = this.Search.bind(this);
    this.searchResults = this.searchResults.bind(this);
  }


  async Search(singerName) {
    const accessToken = localStorage.getItem("accessToken");
    const track_Response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${singerName}`, JSON.parse(accessToken));
    const track_objects = await track_Response.json();
    this.setState({ jsonResponse: track_objects })

  }


  searchResults() {
    // this.state.jsonResponse
    return this.state.jsonResponse.tracks?.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[ 0 ].name,
      album: track.album.name,
      uri: track.uri,
    }));
  }




  render() {
     


    return (
      <div>SongData
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <div className="App-playlist">
            <SearchArtist search={this.Search} />
            <TrackList tracks={this.searchResults()}
              isRemoval={false}
             

            />


          </div>
        </div>


      </div>

    )
  }
}
