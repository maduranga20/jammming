import React from 'react';
// import TrackList from './ProcessList';
// import "./Style/playList.css";

import Track from './Track';

export default class PlayList extends React.Component {
  constructor() {
    super();
    this.state = {
      playlistTracks: [],
      playlistName: "Playlist Name",

    };
    this.addTrack = this.addTrack.bind(this);
    // this.removeTrack = this.removeTrack.bind(this);
    // this.updatePlaylistName = this.updatePlaylistName.bind(this);
    // this.handleNameChange = this.handleNameChange.bind(this);
  }

  // handleNameChange(e) {
  //   const name = e.target.value;
  //   this.props.onNameChange(name);
  // }

  addTrack() {
    // if (
    //   this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    // ) {
    //   return;
    // }
    // let newPlaylistTrack = [ ...this.state.playlistTracks ];
    // newPlaylistTrack.push(track);
    // this.setState({ playlistTracks: newPlaylistTrack });
      return  25;
  }

  // removeTrack(track) {
  //   const newPlaylistTrack = this.state.playlistTracks.filter(
  //     (savedTrack) => savedTrack.id !== track.id
  //   );
  //   this.setState({ playlistTracks: newPlaylistTrack });
  // }

  // updatePlaylistName(newName) {
  //   this.setState({ playlistName: newName });
  // }

//   <input
//   value={this.state.playlistName}
//   onChange={this.handleNameChange}
//   placeholder="Playlist name"
// />

// onRemove={this.removeTrack}
  render() {
    return (
      <>

       
        <Track
          onAdd={this.addTrack}
          tracks={this.state.playlistTracks}
       
          isRemoval={true}

        />

      </>
    )
  }
}
