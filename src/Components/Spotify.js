import React, { Component } from 'react'
import SearchArtist from './Search';
import PlayList from './PlayList';
import TrackList from './ProcessList';
// import "./Style/spotify.css";

export default class SongData extends Component {

  constructor() {
    super();
    this.state = {
      playlistTracks: [],
      jsonResponse: [],
      playlistName: "Playlist Name",

    };
    this.Search = this.Search.bind(this);
    this.addTrack = this.addTrack.bind(this);
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


  addTrack(track) {
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    }
    //Track not found in PLaylist

    //Array copy
    let newPlaylistTrack = [ ...this.state.playlistTracks ];
    newPlaylistTrack.push(track);
    this.setState({ playlistTracks: newPlaylistTrack });
  }


  render() {
    //  console.log(this.searchResults());


    return (
      <div>SongData
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <div className="App-playlist">
            <SearchArtist search={this.Search} />
            <PlayList playlistTracks={this.state.playlistTracks}
              playlistName={this.state.playlistName}
            />
            <TrackList track={this.searchResults()}
              onAdd={this.addTrack}
              isRemoval={false}

            />


          </div>
        </div>


      </div>

    )
  }
}
