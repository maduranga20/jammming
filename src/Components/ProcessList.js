import React, { Component } from 'react'
import Track from './Track'

export default class TrackList extends Component {


  extractList(){
    const lsit=this.props.tracks();
    if(lsit){
     return lsit.items?.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[ 0 ].name,
          album: track.album.name,
          uri: track.uri,
        }));
    }
    return  false

  }
 
  render() {

   
    
// console.log(this.extractList());
// console.log(this);


    // {this.props.tracks?.map((track) => (
          
    //   <Track
      
    //     key={track.id}
    //     onAdd={this.props.onAdd}
    //     track={track}
    //     onRemove={this.props.onRemove}
    //     isRemoval={this.props.isRemoval}
    //   />
    // ))}
    // <Track track={this.props.tracks}/>
    return (

      <div>
        <Track tracklist={this.extractList()}
            isRemoval={this.props.isRemoval}
        />
        
        ProcessList</div>
    )
  }
 
}


// TrackList.defaultProps = {
//   tracklist: null,
  
// };
