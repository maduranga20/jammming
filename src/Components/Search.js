import React, { Component } from 'react'

export default class SearchArtist extends Component {

    constructor() {
        super();
        this.state = {
            spotifyData: [],

        };
    }
    // getSpotify() {

    //     return "getSpotify"
    // }

    async componentDidMount() {
        const toObject = sessionStorage.getItem("accessToken");

        const artistData = await fetch("https://api.spotify.com/v1/search?type=artist&q=David", JSON.parse(toObject));

        const musicData = await artistData.json();
        const dataArtist=musicData.artists;
        // this.setState({ spotifyData: dataArtist })
        console.log(dataArtist);
    }



    render() {
        // const toObject = sessionStorage.getItem("accessToken");

        // console.log( JSON.parse(toObject));
        // console.log(this.state.artistData);



        return (
            <div>Search</div>
        )
    }
}
