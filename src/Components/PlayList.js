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

    addTrack() {
        if (
            this.state.playListTracks.find((savedTrack) => savedTrack.id === this.props.track.id)
        ) {
            return;
        }
        let newPlaylistTrack = [ ...this.state.playlistTracks ];
        newPlaylistTrack.push(this.props.track);
        this.setState({ playlistTracks: newPlaylistTrack });


    }
    removeTrack() {
        // return this.props.playList
    }

    renderPlayList() {
        // const isRemoval=true
        return (
            <div></div>
        );
    }


    render() {
        // console.log(this.props.track);
        console.log( this.state.playListTracks);

        return (
            <div>PlayList</div>
        )
    }
}
