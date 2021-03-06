import Book from './Book'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Search extends Component {

  render() {

    return (
     <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" 
          placeholder="Search by title or author" 
          value={this.props.query}
          onChange={(event) => this.props.updateQuery(event.target.value)}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.props.showingBooks.map((book) => (
          <li key={book.id}>
            <Book allBooks={this.props.allBooks} updateBook={this.props.updateBook} book={book}/>
          </li>
          ))}
        </ol>
      </div>
    </div>
    )
  }
}

export default Search