import React, { Component } from 'react';
import Header from './Header'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      comment: '',
      list: [
        {  
          unicorn: 'Gaticornio',
          image:'../assets/gaticornio.jpg',
          text:'../assets/gaticornio.txt',
          id:'1',
          comments: []
        },
        {
          unicorn: 'Ornitorrincornio',
          image:'../assets/ornitorrincornio.jpg',
          text:'../assets/gaticornio.txt',
          id:'2',
          comments: []
        }
      ],
      poster: ''
    }    
  }

  updateComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  updateUser = (e) => {
    this.setState({
      poster: e.target.value
    })
  }

  addCommentToUnicorn = (index) => {
    let newList = this.state.list;
    let date = new Date().toJSON().slice(0,10).replace(/-/g,'/');

    newList[index].comments.push({
      comment: this.state.comment,
      poster: this.state.poster,
      likes:0,
      postdate: date
    })

    this.setState({
      comment: '',
      poster: '',
      list: newList
    })
  }

  likeSubmitter = (indexObject, index) => {
    let newList = this.state.list;
    newList[indexObject].comments[index].likes++;
    this.setState({
      list: newList
    })
  }

  render() {
    
      return (
        <Header 
        userHandler={this.updateUser}
        list={this.state.list}
        comment={this.state.comment}
        poster={this.state.poster}
        textareaHandler={this.updateComment}
        addCommentToUnicorn={this.addCommentToUnicorn}
        likeSubmitter={this.likeSubmitter}
        />
      );
  }
}

export default App;
