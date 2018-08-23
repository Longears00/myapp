import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state={
    ninjas:[
      {name:'ryu',age:25,id:1}, 
      {name:'yoshi',age:20,id:2},
      {name:'yoshi33',age:30,id:3}, 
    ],
    todos:[
      {id:1,content:'some milk'},
      {id:2,content:'play mario kart'}
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
  deleteTodo = (id)=>{
    let todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    })
    this.setState({todos})
  }
  addTodo = (todo)=>{
    todo.id=Math.random()
    let todos = [...this.state.todos,todo]
    this.setState({todos})
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    );
  }
}

export default App;
