import React from "react";
// import "boxicons";
import "./Track.css";
// D:\Channa\GitHub-Projects\Spotify\jammming\node_modules\boxicons\dist\boxicons.js.map
class Track extends React.Component {
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
          <box-icon name='minus-circle' type='solid'  color='#FFFFFF'></box-icon>
        ) : (
          // <box-icon type='solid' name='plus-circle'></box-icon>
          <box-icon name='plus-circle' type='solid' color='#FFFFFF' ></box-icon>
        )}
      </button>
    );
  }
  // <i class='bx bxs-plus-circle'  style={{color:'#FFFFFF' }}></i>

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    
    return (
      <div className="Track">
        <div className="Track-information">
          <h4> {this.props.track.name} </h4>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

// Track.defaultProps = {
//   onAdd: null,
//   onRemove: null,
// };

export default Track;