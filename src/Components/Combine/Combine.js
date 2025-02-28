import React, { Component } from 'react'
import Spotify from '../../API/Spotify';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResult/SearchResults';
import Playlist from '../Playlist/Playlist';
import './Combine.css';
import Swal from 'sweetalert2'

// import Swal from 'sweetalert2/dist/sweetalert2.js'


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
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);

    }


    popupMessage(title, message, icon) {
        Swal.fire(title, message, icon);
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

    removeTrack(track) {
        const newPlaylistTrack = this.state.playlistTracks.filter(
            (savedTrack) => savedTrack.id !== track.id
        );
        this.setState({ playlistTracks: newPlaylistTrack });
    }

    updatePlaylistName(newName) {
        this.setState({ playlistName: newName });
    }

    async savePlaylist() {
        const tracksUris = this.state.playlistTracks.map((track) => track.uri);
        const noTracks = tracksUris.length === 0;
        const noPlaylistName = this.state.playlistName.trim() === "";
        if (!noTracks && !noPlaylistName) {
            await Spotify.savePlaylist(this.state.playlistName, tracksUris);

            this.setState({ playlistName: "Playlist Name", playlistTracks: [] });
        } else {
        }
    }

    async search(term) {
        // const response = await Spotify.search(term);

        // if (!response) return;
        // else if (response.length === 0);
        // else this.setState({ searchResults: response });


        if (term.trim() === "") {
            this.popupMessage("Warning!", "Enter a search term.", "warning");
        } else {
            this.toggleBlocking();
            const response = await Spotify.search(term);
            this.toggleBlocking();

            if (!response) return;
            else if (response.length === 0)
                this.popupMessage("Error!", `No results found for: ${term}.`, "error");
            else this.setState({ searchResults: response });
        }

    }



    render() {





        return (
            <div>
                <h1>
                    Ja<span className="highlight">mmm</span>ing
                </h1>
                <div className="App">
                    <SearchBar onSearch={this.search} />

                    <div className="App-playlist">
                        <SearchResults
                            onAdd={this.addTrack}
                            searchResults={this.state.searchResults}
                        />
                        <Playlist
                            onRemove={this.removeTrack}
                            onNameChange={this.updatePlaylistName}
                            onSave={this.savePlaylist}
                            playlistTracks={this.state.playlistTracks}
                            playlistName={this.state.playlistName}
                        />
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