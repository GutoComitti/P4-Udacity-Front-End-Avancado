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
		console.log('tá atualizando movebook');
		const bookFromState = this.props.allBooks.filter((book)=>book.id === this.props.book.id);
		if (bookFromState.length === 1){
			this.props.book.shelf = bookFromState[0].shelf;
		}

    return (
       <select value={this.props.book.shelf ? this.props.book.shelf : 'none'} onChange={event => {this.changeShelf(event.target.value)}}>
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
/*
className={this.props.book.shelf === 'currentlyReading' && ('selected')}
className={this.props.book.shelf === 'wantToRead' && ('selected')} {this.props.book.shelf === 'wantToRead' && ('CHECK')}
className={this.props.book.shelf === 'read' && ('selected')} {this.props.book.shelf === 'read' && ('CHECK')}
className={this.props.book.shelf === 'none' && ('selected')} {this.props.book.shelf === 'none' && ('CHECK')}
*/