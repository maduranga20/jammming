import React, { Component } from 'react'


export default class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistTracks: [],
      playlistName: "Playlist Name",

    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    return (
      <button
        onClick={this.props.isRemoval ? this.removeTrack : this.addTrack}
        className="Track-action"
      >
        {this.props.isRemoval ? (
          <h4>-</h4>
        ) : (
          <h4>+</h4>
        )}
      </button>
    );

    // if (this.props.isRemoval) {
    //   return <button className='Track-action'>-</button>;
    // } else {
    //   return <button className='Track-action' onClick={this.addTrack} >+</button>;
    // }
  }



  addTrack() {
    // console.log(typeof(this.props.onAdd()));
    // this.props.onAdd(this.props.track)
    // if (
    //   this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    // ) {
    //   return;
    // }
    const track = this.props.tracklist;

    if (this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    }
    let newPlaylistTrack = [ ...this.state.playlistTracks ];
    newPlaylistTrack.push(track);
    this.setState({ playlistTracks: newPlaylistTrack });
    console.log(this.props.tracklist);

  }
  removeTrack() {
    // this.props.onRemove(this.props.track);
  }

  render() {
    // this.addTrack()

    // console.log(this.addTrack());


    return (
      <div>
        <div>


         

        </div>

        Track
        {this.renderAction()}

      </div>
    )
  }
}

// Track.defaultProps = {
//     onAdd: null,
//     onRemove: null,
//   };

