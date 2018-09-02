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
    // fetch('http://localhost:3001')
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
      if (coda.name.toLowerCase().includes(this.state.searchVal) || coda.appName.toLowerCase().includes(this.state.searchVal)) {
        // console.log(coda)
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
                        githubLink={coda.publicURL !== "" ? coda.publicURL : coda.githubLink}
                        name={coda.name}
                        appName={coda.appName}
                        githubRepo={coda.githubRepo}
                        publicURL={coda.publicURL !== "" ? true : false}
                        img={coda.img}
                        publicCSSClass={coda.publicURL !== "" ? 'text-primary' : ''}
                  />
        })

    return (
      <div className="container">

        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
          <div className="container">
            <div className="row">
                <div className="col-lg-4"> 
                  <span className="navbar-brand form-intro">Codacade</span>
                </div>
                <div className="col-lg-4">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
            
          </div>
            

          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">            
                
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
