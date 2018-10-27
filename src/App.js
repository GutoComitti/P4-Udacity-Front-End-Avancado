import './App.css'
import React, { Component } from 'react';
import BookShelf from './BookShelf'
import Search from './Search'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {

  state = {
  	shelfBooks: []
  }
// getAllBooks = () => ()

  	componentDidMount() {
  		BooksAPI.getAll().then((books) => {
  			this.setState({shelfBooks: books.filter(() => books.shelf === this.props.shelf)})
  		})
  	}

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <BookShelf allBooks={this.state.shelfBooks} shelf='currentlyReading' />
              <BookShelf allBooks={this.state.shelfBooks} shelf='wantToRead' />
              <BookShelf allBooks={this.state.shelfBooks} shelf='read' />
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
