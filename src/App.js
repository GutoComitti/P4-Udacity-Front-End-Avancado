import './App.css'
import React, { Component } from 'react';
import BookShelf from './BookShelf'
import Search from './Search'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
  state = {

  }

  "wantToRead"
  "read"
  "currentlyReading"

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <BookShelf shelf='currentlyReading' />
              <BookShelf shelf='wantToRead' />
              <BookShelf shelf='read' />
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
