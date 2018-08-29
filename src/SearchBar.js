import React, { Component } from 'react';

export class SearchBar extends Component {

  constructor(props){
    super(props)

     this.state = {
       codas: props.codas

     }
  }

  componentWillMount() {

  }

  render() { 
          

    return (
      <div>
        {this.props.first}
      </div>
    )
  }
}
