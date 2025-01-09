import React from 'react';
// import "./Style/playList.css";




export default class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      playlistName: "Playlist Name",


    };
    this.removeTrack = this.removeTrack.bind(this);

   
  }

  removeTrack(track) {
    const newPlaylistTrack = this.state.playlistTracks.filter(
      (savedTrack) => savedTrack.id !== track.id
    );
    this.setState({ playlistTracks: newPlaylistTrack });
  }











  render() {

    return (
     <>
     
     
     </>
    )
  }
}
