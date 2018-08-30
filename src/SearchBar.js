import React, { Component } from 'react';

export class SearchBar extends Component {
  render() { 
          

    return (
      <div className="input-group mb-3">
        <input 
          type="text" 
          placeholder="Search..." 
          value={this.props.searchVal}
          onChange={this.props.handleChange}
          className="form-control" />
      </div>
    )
  }
}
