import React, { Component } from 'react';

export class SearchBar extends Component {
  render() { 
          

    return (
      <form className="form-inline">
        <input className="form-control" 
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
