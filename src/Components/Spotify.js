import React, { Component } from 'react'
import SearchArtist from './Search';

export default class SongData extends Component {

  constructor() {
    super();
    this.state = {
      spotifyData: [],
      check_response: [],
      song_list: [],
      check_name: ""
    };
    this.Search = this.Search.bind(this);
  }


  async Search(singerName) {
    const toObject = localStorage.getItem("accessToken");
    const artistData = await fetch(`https://api.spotify.com/v1/search?type=artist&q=${singerName}`, JSON.parse(toObject));
    const musicData = await artistData.json();
    this.setState({ check_response: artistData })
    this.setState({ spotifyData: musicData.artists })
    this.setState({ check_name: singerName })

  }


  artistInformation() {
    const selected_artist = this.configureResponse();
    if (Array.isArray(selected_artist) === false) {
      return selected_artist;
    }
    else if (Array.isArray(selected_artist)) {
      const findby_name = selected_artist.find((item) => {
        return item.name == this.state.check_name;
      });
      return findby_name;
    }
    else {
    }
  }

  configureResponse() {
    const { items } = this.state.spotifyData;
    if (this.state.check_response.ok) {
      return items
    }
    else {
      return "Not success"
    }
  }


  render() {
    // console.log(this.configureResponse());
    console.log(this.artistInformation());


    return (
      <div>SongData
        <SearchArtist search={this.Search} />
      </div>

    )
  }
}
