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

  // filterCodas() {
  //   console.log("filtering")

  //   // var newArray = []
    
  //   // this.state.initialCodas.forEach(coda => {
  //   //   if (coda.name.toLowerCase().includes(this.state.searchVal)){
  //   //     newArray.push(coda)

  //   //     this.setState({
  //   //       codas: newArray
  //   //     })
        
  //   //   } 
  //   //   else {
  //   //     this.setState({
  //   //       codas: this.state.initialCodas,
  //   //       searchVal: ""
  //   //     })
  //   //   }
  //   //   // else { return }
  //   // //   this.setState({
  //   // //     codas: newArray
  //   // //   })
  //   // // })    
  //   // })
  //   // console.log(newArray, this.state.initialCodas)
    
  //   // let filteredCodasArray = []
  //   // const filteredCodasArray = this.state.codas.filter(coda => {
  //   //   if (coda.name.includes(this.state.searchVal)) {
  //   //     return coda
  //   //   }
  //   // })
  //   // this.state.codas.forEach(coda => {
  //   //   if (coda.name.includes(this.state.searchVal)) {
  //   //     filteredCodasArray.push(coda)
  //   //   }
  //   // })    

  //   // var updatedList = this.state.initialCodas
  //   // updatedList = updatedList.filter(function(coda){
  //   //   console.log(coda.name)
  //   //   if (coda.name.toLowerCase().includes(this.state.searchVal.toLowerCase())) {
  //   //       return coda
  //   //     }
  //   //   });
  //   //   this.setState({codas: updatedList});
  //   }
    
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
      <div className="row">
        <SearchBar 
          searchVal={this.state.searchVal}
          handleChange={this.handleChange}/>
        {codas}        
      </div>
    );
  }
}

export default App;
