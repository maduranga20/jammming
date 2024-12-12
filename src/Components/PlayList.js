import React from 'react'

export default class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playListTracks: [],
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }


  renderTracks() {
    return (
      <div>
        <button onClick={this.props.isRemoval ? this.removeTrack : this.addTrack}> {this.props.isRemoval ?
          (<p> Remove</p>

          ) : (
            <p>Add</p>
          )}</button>

      </div>

    );
  }


  selectTrack() {
    if (!this.props.searchResults) {
      return []
    }



    return this.props.searchResults.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[ 0 ].name,
      album: track.album.name,
      uri: track.uri,
    }));

  }

  addTrack() {

    // const {expensiveProducts} = this.selectTrack().find(product => product.price >40);
    // const expensiveProducts = this.selectTrack().filter(product => product.price >40);


    // const { track: artist } = this.selectTrack().filter(track => track);
    const { id: trackid } = this.selectTrack().find(track => track.id);

    if (this.state.playListTracks.find((savedTrack) => savedTrack.id === trackid)) {
      return;
    }
    // let newPlaylistTrack = [ ...this.state.playListTracks ];
    // newPlaylistTrack.push(this.selectTrack());  
    this.setState({ playListTracks: this.selectTrack() })

  }

  removeTrack() {
    const { id: trackid } = this.selectTrack().find(track => track.id);
    const newPlaylistTrack = this.state.playListTracks.filter(
      (savedTrack) => savedTrack.id!==trackid
    );
    this.setState({ playlistTracks: newPlaylistTrack });



  }



  render() {

    // console.log(this.selectTrack().items);
    // console.log(this.removeTrack());
    // console.log(this.props.isRemoval);
    // console.log(this.renderTracks());
       console.log(this.state.playListTracks);
       

    return (
      <div><p>PlayList</p>
        {this.renderTracks()}

      </div>
    )
  }
}
