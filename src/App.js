import './App.css'
import React, { Component } from 'react';
import BookShelf from './BookShelf'
import Search from './Search'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
	state = {
		allBooks: []
	}
  updateBook = (book, shelf) =>{
  	// if(shelf){
	  	let updatedBook = this.state.allBooks.filter((shelfsBook) => (shelfsBook.id === book.id));
	  	updatedBook = updatedBook[0];
	  	updatedBook.shelf = shelf;
	  	this.setState((prevState) => {
	  		// if (shelf){
		  		prevState.allBooks.forEach((shelfsBook) => {if(shelfsBook.id === book.id){shelfsBook = updatedBook}});
		  		return {allBooks: prevState.allBooks}
		  	// }
	  	})
	// }
  }
// getAllBooks = () => ()

  	componentDidMount() {
  		BooksAPI.getAll().then((books) => {
  			this.setState({allBooks: books})
  		})
  	}
// ,
//   	query: '',
//   	queryBooks: []
// let showingBooks;
// if (this.state.query){
// 	const match = new RegExp(escapeRegExp(this.state.query), 'i');
// 	showingBooks = this.props.contacts.filter((contact) => match.test(contact.name))
// }else{
// 	showingContacts = this.props.contacts;
// }

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <BookShelf allBooks={this.state.allBooks} updateBook={this.updateBook} shelf='currentlyReading' />
              <BookShelf allBooks={this.state.allBooks} updateBook={this.updateBook} shelf='wantToRead' />
              <BookShelf allBooks={this.state.allBooks} updateBook={this.updateBook} shelf='read' />
              </div>
            </div>
            	//TODO: arrumar pra que o botão passe pra URL (React Router) do search
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
