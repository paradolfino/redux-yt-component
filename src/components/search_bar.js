import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let term = e.target.value;
    this.setState({ term });
    this.props.onChange(term);
  } 

  render() {
    return (
      <div className='search-bar'>
        <input
        value={this.state.term} 
        onChange={this.onChange} />
      </div>
    );
  }
}

export default SearchBar;
