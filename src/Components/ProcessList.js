import React, { Component } from 'react'
import Track from './Track'

export default class TrackList extends Component {
 
  render() {
    
    // console.log(`from trackList ${this.props.isRemoval}`);
    // console.log(`from trackList ${this.props.text(" text")}`);
    // this.props.text(" from trackList");
    

    return (

      <div>
       
        {this.props.tracks?.map((track) => (
          
          <Track
          
            key={track.id}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            track={track}
            isRemoval={this.props.isRemoval}
          />
        ))}
        ProcessList</div>
    )
  }
}
