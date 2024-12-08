import React, { Component } from 'react'
import SearchArtist from './Search';
import PlayList from './PlayList';

export default class SongData extends Component {

  constructor() {
    super();
    this.state = {
      search_tracks: [],
      check_response: [],
      song_list: [],
      searchResults: [],
      check_name: ""
    };
    this.Search = this.Search.bind(this);
    this.configureSearch = this.configureSearch.bind(this);
  }


  async Search(singerName) {
    const accessToken = localStorage.getItem("accessToken");
    const track_Response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${singerName}`, JSON.parse(accessToken));
    const trrack_objects = await track_Response.json();   
    this.setState({ search_tracks: trrack_objects })

  }


  // artistInformation() {
  //   const selected_artist = this.configureResponse();
  //   if (Array.isArray(selected_artist) === false) {
  //     return selected_artist;
  //   }
  //   else if (Array.isArray(selected_artist)) {
  //     const findby_name = selected_artist.find((item) => {
  //       return item.name == this.state.check_name;
  //     });
  //     return findby_name;
  //   }
  //   else {
  //   }
  // }

  configureSearch() {
    if (!this.state.search_tracks.tracks) {
      return [];
    }

      return this.state.search_tracks.tracks.items;
  }


  render() {
    // console.log(this.configureSearch());
    // console.log(this.artistInformation());
    // console.log(this.state.search_tracks.tracks);


    return (
      <div>SongData
        <SearchArtist search={this.Search} />
        {this.configureSearch().map((track) => (
          <PlayList
            key={track.id}
            track={track}
            isRemoval={true}


          />
        ))
        } 
        
      </div>

    )
  }
}
