import React, { Component } from 'react'

export default class SearchArtist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toFind: "",
        };
       
        this.searchData = {};

        this.SearchingArtist = this.SearchingArtist.bind(this);
        // this.combinneSubmit = this.combinneSubmit.bind(this);
        this.SubmitInput = this.SubmitInput.bind(this);

       
    }

    SearchingArtist(event) {
        this.setState({ toFind: event.target.value });
    }
    SubmitInput()  {
        // this.searchData = this.state.toFind;
        // console.log(event.bubbles);
        // console.log(this.state.toFind);
        this.props.info(this.state.toFind);
        
    }

    // combinneSubmit(){
    //     this.props.info("Michael");
       
        
    // }


    // async Search() {
    //     const toObject = sessionStorage.getItem("accessToken");


    //     const singerName = "Michael";
    //     const artistData = await fetch(`https://api.spotify.com/v1/search?type=artist&q=${singerName}`, JSON.parse(toObject));

    //     const musicData = await artistData.json();
    //     const dataArtist = musicData.artists;
    //     this.setState({ spotifyData: dataArtist })


    //     this.number = dataArtist;
    // }
    // componentDidMount() {
    //     this.combinneSubmit();
    // }

    render() {
        // const name="Search component"
        // this.combinneSubmit();
        // console.log( this.searchData);
        return (
            <div><h3>Search</h3>
                <input type='text' onChange={this.SearchingArtist} />
                <button onClick={this.SubmitInput}>Search</button>
            </div>
        )
    }
}
