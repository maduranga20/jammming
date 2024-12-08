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
    //    const isRemoval=true

    renderPlayList() {
        return (
            <button onClick={this.props.isRemoval ?this.removeTrack : this.addTrack}> 
            { this.props.isRemoval ?  (<p>Remove</p>): (<p>Add</p>)}
            
            </button>

        )
    }

    addTrack() {
        // let list=this.props.track;
        if (
            this.state.playListTracks.find((savedTrack) => savedTrack.id === this.props.track.id)
        ) {
            return;
        }

        let newPlaylistTrack = [ ...this.state.playListTracks ];
        newPlaylistTrack.push(this.props.track);
        this.setState({ playlistTracks: newPlaylistTrack });


    }

    removeTrack() {
        const newPlaylistTrack = this.state.playListTracks.filter(
            (savedTrack) => savedTrack.id !== this.props.track.id
          );
          this.setState({ playlistTracks: newPlaylistTrack });
      
    }




    render() {
        console.log(this.state.playListTracks);
        // console.log( this.addTrack());

        return (
            <div><p>PlayList</p>

                {this.renderPlayList()}
            </div>
        )
    }
}
