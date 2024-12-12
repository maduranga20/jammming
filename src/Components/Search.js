import React, { Component } from 'react';
import "./Style/searchBar.css";

export default class SearchArtist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            artist_name: "",
            check_event:[]
        };

        this.searchingArtist = this.searchingArtist.bind(this);
        this.submitInput = this.submitInput.bind(this);
        this.keyEnter = this.keyEnter.bind(this);

    }

    searchingArtist(event) {
        this.setState({ artist_name: event.target.value });
        this.setState({ check_event: event.bubbles });
    }
    submitInput() {
        this.props.search(this.state.artist_name);

    }
    keyEnter(e) {
        if (e.keyCode === 13) {
            this.submitInput();}
        // console.log(e.keyCode);
        
      }
    render() {

        // console.log(this.state.check_event);
        
        return (
            <div className="SearchBar">
                <input type='text' onChange={this.searchingArtist}
                  onKeyDown={this.keyEnter} 
                  placeholder="Enter A Song, Album, or Artist"/>
                <button onClick={this.submitInput} className="SearchButton">Search</button>
            </div>
        )
    }
}
