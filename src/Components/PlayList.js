import React from 'react';
import TrackList from './ProcessList';
// import "./Style/playList.css";




export default class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistName: "Playlist Name",
      playlistTracks: [],
    };
    this.removeTrack = this.removeTrack.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);

  }

  handleNameChange(e) {
    const name = e.target.value;
    this.props.onNameChange(name);
  }


  addTrack(track) {

    // console.log(track);

    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    }

    let newPlaylistTrack = [ ...this.state.playlistTracks ];
    newPlaylistTrack.push(track);
    this.setState({ playlistTracks: newPlaylistTrack });

  }


  removeTrack(track) {
    const newPlaylistTrack = this.state.playlistTracks.filter(
      (savedTrack) => savedTrack.id !== track.id
    );
    this.setState({ playlistTracks: newPlaylistTrack });
  }

  updatePlaylistName(newName) {
    this.setState({ playlistName: newName });
  }

  render() {
    // console.log(this.addTrack());

    return (
      <>

        <input
          value={this.state.playlistName}
          onChange={this.handleNameChange}
          placeholder="Playlist name"
        />
        <TrackList
          onAdd={this.addTrack}
          onRemove={this.removeTrack}
          isRemoval={true}
          tracks={this.state.playlistTracks}
        
        />

      </>
    )
  }
}
