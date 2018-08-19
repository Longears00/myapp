import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state={
    ninjas:[
      {name:'ryu',age:25,id:1}, 
      {name:'yoshi',age:20,id:2},
      {name:'yoshi33',age:30,id:3}, 
    ]
  }
  addNinja = (ninja)=>{
    ninja.id=Math.random()
    let ninjas = [...this.state.ninjas]
    ninjas.push(ninja)
    this.setState({ninjas:ninjas})
  }
  deleteNinja=(id)=>{
    let ninjas = this.state.ninjas.filter(item=>{
      return item.id !== id
    })
    this.setState({ninjas:ninjas})
  }
  render() {
    return (
      <div className="App">
        <h1>my app</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}></Ninjas>
        <AddNinja addNinja={this.addNinja}></AddNinja>
      </div>
    );
  }
}

export default App;
