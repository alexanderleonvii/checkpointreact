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
      task: ''
    }    
  }

  updateComment = (e) => {
    this.setState({
      comment: e.target.value
    })

  }

  addCommentToUnicorn = (index) => {
    let newList = this.state.list;
    let newComment = newList[index].comments;

    newComment.push({
      comment: this.state.comment,
      likes:0
    })

    this.setState({
      comment: '',
      list: newList
    })
  }

  render() {
    
      return (
        <Header 
        clickHandler={this.goToView}
        list={this.state.list}
        comment={this.state.comment}
        textareaHandler={this.updateComment}
        addCommentToUnicorn={this.addCommentToUnicorn}
        />
      );
  }
}

export default App;
