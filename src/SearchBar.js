import React, { Component } from 'react';

export class SearchBar extends Component {
  render() { 
          

    return (
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" 
          type="text" 
          placeholder="Search..." 
          aria-label="Search" 
          value={this.props.searchVal}
          onChange={this.props.handleChange}
          />
      </form>
    )
  }
}
