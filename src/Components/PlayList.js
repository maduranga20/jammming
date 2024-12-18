import React from 'react';
import "./Style/playList.css";




export default class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playListTracks: [],
      playlistName: "Playlist Name",
      isRemoval:this.props.isRemoval

    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }


  renderTracks() {
    return (
      <button
        onClick={this.props.isRemoval ? this.removeTrack : this.addTrack}

      >
        {this.props.isRemoval ? (
          <p>minus </p>
        ) : (
          <p> plus</p>
        )}
      </button>
    );
  }


  trackList(){
    return this.props.searchResults.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[ 0 ].name,
      album: track.album.name,
      uri: track.uri,
    }));
  }

  selectTrack() {
    if (!this.props.searchResults) {
      return []
    }

    return this.trackList();

  }

  addTrack() {

    const { id: trackid } = this.selectTrack().find(track => track.id);

    if (this.state.playListTracks.find((savedTrack) => savedTrack.id === trackid)) {
      return;
    }
    this.setState({ playListTracks: this.selectTrack() })

  }

  removeTrack() {
    const { id: trackid } = this.selectTrack().find(track => track.id);
    const newPlaylistTrack = this.state.playListTracks.filter(
      (savedTrack) => savedTrack.id !== trackid
    );
    this.setState({ playlistTracks: newPlaylistTrack });

  }


  updatePlaylistName(newName) {
    this.setState({ playlistName: newName });
  }


  render() {

    // const list = this.state.playListTracks.map(
    //   (track) => (
    //     {
    //       id: track.id,
    //       name: track.name,
    //    }
    //   )
    // );
    // console.log(list);
console.log(this.state.isRemoval);
// 

    return (
      <div  >
        <div >
          <h3>list</h3>

        </div>
        {this.renderTracks()}
      </div>
    )
  }
}
