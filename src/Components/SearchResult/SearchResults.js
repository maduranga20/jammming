import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {

  render() {
   
    // console.log( this.props.searchResults);

    return (
      <div className="SearchResults">
        <h3>Results</h3>
        <TrackList
          onAdd={this.props.onAdd}
          isRemoval={false}
          tracks={this.props.searchResults}
        />
      </div>
    );
  }
}

export default SearchResults;
