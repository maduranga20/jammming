import React from 'react'

export default class PlayList extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
//    const isRemoval=true

    addTrack() {
        return this.props.playList
    }
    removeTrack() {
        return this.props.playList
    }

    renderPlayList(){
        const isRemoval=true
        return (
            <div></div>
        );
    } 


    render() {
        console.log(this.props.playList);

        return (
            <div>PlayList</div>
        )
    }
}
