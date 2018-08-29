import React, { Component } from 'react';
import './App.css';
import { SearchBar } from './SearchBar';
import { Card } from './Card';

class App extends Component {

  constructor(props){
    super(props)

    this.first = "Schmitty pants"

    this.state = {
      codas: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:3001/')
      .then(users => {
        return users.json()
      })
      .then(json => {
        console.log(json)
        this.setState({
          codas: json
        })
        console.log(this.state.codas)
    })
  }

  render() {
        const codas = this.state.codas.map(coda => {
          return <Card key={coda.id}
                       githubLink={coda.githubLink}
                       name={coda.name}
                  />
        })

    return (
      <div className="row">
        {codas}        
      </div>
    );
  }
}

export default App;
