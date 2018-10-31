import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import App from './App'

class MoveBook extends Component {

	render() {

  	const changeShelf = (value) =>{
  		console.log(value)
  		if (value && value !== this.props.book.shelf){
  			debugger;
	  		BooksAPI.update(this.props.book, value).then((e) =>{
	  			this.props.updateBook(this.props.book, value);
	  		})
	  	}
	}

    return (
       <select onChange={event => {changeShelf(event.target.value)}}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>

    )
  }
}

export default MoveBook