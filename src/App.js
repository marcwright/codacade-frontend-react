import React, { Component } from 'react';
import './App.css';
import { SearchBar } from './SearchBar';
import { Card } from './Card';

class App extends Component {

  constructor(props){
    super(props)

    this.first = "Schmitty pants"

    this.state = {
      codas: [],
      initialCodas: [],
      searchVal: "",
      newArray: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.filterCodas = this.filterCodas.bind(this)
  }

  componentWillMount() {
    fetch('http://localhost:3001/')
      .then(users => {
        return users.json()
      })
      .then(json => {
        console.log(json)
        this.setState({
          initialCodas: json,
          codas: json
        })
        console.log(this.state.initialCodas)
    })
  }
    
  filterCodas = () => {
    var filteredCodasArray = []

    this.state.initialCodas.forEach(coda => {
      if (coda.name.toLowerCase().includes(this.state.searchVal)) {
        console.log(coda)
        return filteredCodasArray.push(coda)
      }
    })

    console.log(filteredCodasArray)

    return this.setState({
      codas: filteredCodasArray
    })

  }


  handleChange = (e) => {
    
    this.setState({
      searchVal: e.target.value.toLowerCase()
    }, () => {
      return this.filterCodas()
    })
  }
  
  
  render() {
        
        console.log(this.state.searchVal)

        const codas = this.state.codas.map(coda => {
          return <Card key={coda.id}
                       githubLink={coda.githubLink}
                       name={coda.name}
                  />
        })

    return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <a class="navbar-brand pressStartFont" href="#">Codacade</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Add your app<span class="sr-only">(current)</span></a>
                </li>
              </ul>
              <SearchBar 
                searchVal={this.state.searchVal}
                handleChange={this.handleChange}/>
            </div>
        </div>
          </nav>

        <main role="main">
          <div class="album py-5">
            <div class="container">
              <div className="row">
              
                {codas}        
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
