import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header'
import View from './View';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      list: [
        {  
          unicorn: 'Gaticornio',
          image:'../assets/gaticornio.jpg',
          text:'../assets/gaticornio.txt',
          id:'1',
          comments: [
            {task:'hola',
              likeCounter: 1},
            {task:'adios',
              likeCounter: 2}
          ]
        },
        {
          unicorn: 'Ornitorrincornio',
          image:'../assets/ornitorrincornio.jpg',
          text:'../assets/gaticornio.txt',
          id:'2',
          comments: []
        }
      ],
      task: ''
    }    
  }
// Agregar función para añadir comentario
addTaskToList=()=>{
  // add task to this.state.list
  if (this.state.task){
  let newList=this.state.list
  
  newList.push({
    task: this.state.task,
    completed: false,
    likeCounter:0
  })

  this.setState({
    task:'',
    list:newList
  })
  }
  
}
// AGregar funcion para dar like
  render() {
    console.log('Abriendo el App');
    
      return (
        <Header 
        // pasar las funciones en los props

        // mandar el task para agregar los comentarios 
        clickHandler={this.goToView}
        list={this.state.list}
        />
      );
  }
}

export default App;
