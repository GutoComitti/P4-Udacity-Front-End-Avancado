import Book from './Book'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//TODO: Fazer o input estar ligado ao estado, e a cada novo caractere inserido re-renderizar a página com os livros filtrados
//TODO: Fazer a função pra filtrar os livros e retornar um componente Book pra cada resultado
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
          <li>
            <Book allBooks={this.props.allBooks} updateBook={this.props.updateBook} book={book} key={book.id}/>
          </li>
          ))}
        </ol>
      </div>
    </div>
    )
  }
}

export default Search