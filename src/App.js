import React, { Component } from 'react';
import './App.css';
import { SearchBar } from './SearchBar';
import { Card } from './Card';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      codas: [],
      initialCodas: [],
      searchVal: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.filterCodas = this.filterCodas.bind(this)
  }

  componentWillMount() {
    fetch('https://codacade-api.herokuapp.com/')
      .then(users => {
        return users.json()
      })
      .then(json => {
        // console.log(json)
        this.setState({
          initialCodas: json,
          codas: json
        })
        // console.log(this.state.initialCodas)
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

    // console.log(filteredCodasArray)

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
        
        // console.log(this.state.searchVal)

        const codas = this.state.codas.map(coda => {
          return <Card key={coda.id}
                       githubLink={coda.githubLink}
                       name={coda.name}
                  />
        })

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand form-intro" href="/">Codacade</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="form.html">Add your app<span className="sr-only">(current)</span></a>
                </li>
              </ul>
              <SearchBar 
                searchVal={this.state.searchVal}
                handleChange={this.handleChange}/>
            </div>
          </div>
        </nav>

        <main role="main">
          <div className="album py-5">
            <div className="container">
              <div className="row animated fadeIn">
              
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
