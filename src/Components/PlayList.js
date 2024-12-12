import React from 'react'

export default class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playListTracks: [],
    }
    this.addTrack = this.addTrack.bind(this);
  }


  renderTracks() {
    return (
      <button onClick={this.addTrack}>Add</button>
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
    // const {price} = products
    // return  products
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

    //   return  this.selectTrack();
    // "WWE"


    // return this.props.tracks

  }




  render() {

    // console.log(this.selectTrack().items);
    console.log(this.state.playListTracks);
    // console.log(this.props.isRemoval);
    // console.log(this.renderTracks());
    // 

    return (
      <div><p>PlayList</p>
        {this.renderTracks()}

      </div>
    )
  }
}
