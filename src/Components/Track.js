import React, { Component } from 'react'


export default class Track extends Component {
    constructor(props) {
        super(props);
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
      }
    
    
      addTrack() {
        // this.props.onAdd(this.props.track);
        console.log(typeof(this.props.onAdd));
        // console.log(this.props.track);
        // console.log(this.props.onAdd);
      //  console.log(Object.entries(this.props.onAdd));
     
        
      }
      removeTrack() {
        this.props.onRemove(this.props.track);
      }
    
  render() {
    // this.props.testline(" from trackList")
  //  let inside=Object.entries(this.props.onAdd);
    // console.log( typeof(this.props.onAdd));
    // console.log( Object.keys(this.props.onAdd));
   
    
    return (
      <div>
        
        
        Track
        {this.renderAction()}

        </div>
    )
  }
}

Track.defaultProps = {
    onAdd: null,
    onRemove: null,
  };