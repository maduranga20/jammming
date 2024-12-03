import React, { Component } from 'react'

export default class SearchArtist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist_name: "",
            check_event:[]
        };

        this.searchData = {};

        this.SearchingArtist = this.SearchingArtist.bind(this);
        this.SubmitInput = this.SubmitInput.bind(this);

    }

    SearchingArtist(event) {
        this.setState({ artist_name: event.target.value });
        this.setState({ check_event: event.bubbles });
    }
    SubmitInput() {
        this.props.search(this.state.artist_name);

    }

    render() {

        // console.log(this.state.check_event);
        
        return (
            <div><h3>Search</h3>
                <input type='text' onChange={this.SearchingArtist} />
                <button onClick={this.SubmitInput}>Search</button>
            </div>
        )
    }
}
