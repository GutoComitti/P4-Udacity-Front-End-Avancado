import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class MoveBook extends Component {

changeShelf = (value) =>{
	console.log(`MoveBook.value é ${value}`)
	if (value && value !== this.props.book.shelf){
  		BooksAPI.update(this.props.book, value).then((e) =>{
  			this.props.updateBook(this.props.book, value);
  		})
  	}
}

	render() {
		console.log(`this.props.book.shelf é ${this.props.book.shelf}`)


    return (
       <select value={this.props.book.shelf} onChange={event => {this.changeShelf(event.target.value)}}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">{this.props.book.shelf === 'currentlyReading' && ('CHECK')}Currently Reading</option>
        <option value="wantToRead">{this.props.book.shelf === 'wantToRead' && ('CHECK')}Want to Read</option>
        <option value="read">{this.props.book.shelf === 'read' && ('CHECK')}Read</option>
        <option value="none">{this.props.book.shelf === 'none' && ('CHECK')}None</option>
      </select>
    )
  }
}

export default MoveBook