import React, { Component } from 'react'


export default class Track extends Component {
  constructor() {
    super();
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    // return (
    //   <button
    //     onClick={this.props.isRemoval ? this.removeTrack : this.addTrack}
    //     className="Track-action"
    //   >
    //     {this.props.isRemoval ? (
    //      <h4>-</h4>
    //     ) : (
    //       <h4>+</h4>
    //     )}
    //   </button>
    // );

    // if (this.props.isRemoval) {
    //   return <button className='Track-action'>-</button>;
    // } else {
    //   return <button className='Track-action' onClick={this.addTrack} >+</button>;
    // }
  }



  addTrack() {
    // console.log(typeof(this.props.onAdd()));
    // this.props.onAdd(this.props.track)
    console.log(this.props.onAdd(25))

  }
  removeTrack() {
    // this.props.onRemove(this.props.track);
  }

  render() {

   this.addTrack()
    return (
      <div>


        Track
       

      </div>
    )
  }
}

// Track.defaultProps = {
//     onAdd: null,
//     onRemove: null,
//   };