import React, { Component } from 'react'
import Spotify from '../../API/Spotify';
import SearchBar from '../SearchBar/SearchBar';

import './Combine.css';

export default class Combine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //   blocking: false,
            searchResults: [],
            playlistName: "Playlist Name",
            playlistTracks: [],
        };
        this.addTrack = this.addTrack.bind(this);

    }
    addTrack(track) {
        if (
            this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
        ) {
            return;
        }
        //Track not found in PLaylist

        //Array copy
        let newPlaylistTrack = [ ...this.state.playlistTracks ];
        newPlaylistTrack.push(track);
        this.setState({ playlistTracks: newPlaylistTrack });
    }


    async search(term) {
        const response = await Spotify.search(term);

        if (!response) return;
        else if (response.length === 0);
        else this.setState({ searchResults: response });


    }

//     <SearchResults
//     onAdd={this.addTrack}
//     searchResults={this.state.searchResults}
// />


    render() {
        return (
            <div>
                <h1>
                    Ja<span className="highlight">mmm</span>ing
                </h1>
                <div className="App">
                    <SearchBar onSearch={this.search} />

                    <div className="App-playlist">
                       

                    </div>
                </div>
            </div>
        )
    }
}


// <div className="App-playlist">
//     <SearchResults
//         onAdd={this.addTrack}
//         searchResults={this.state.searchResults}
//     />
//     <Playlist
//         onRemove={this.removeTrack}
//         onNameChange={this.updatePlaylistName}
//         onSave={this.savePlaylist}
//         playlistTracks={this.state.playlistTracks}
//         playlistName={this.state.playlistName}
//     />
// </div>