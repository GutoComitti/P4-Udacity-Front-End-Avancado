import Book from './Book'
import React, { Component } from 'react'
//TODO: Fazer o input estar ligado ao estado, e a cada novo caractere inserido re-renderizar a página com os livros filtrados
//TODO: Fazer a função pra filtrar os livros e retornar um componente Book pra cada resultado
class Search extends Component {



  render() {
    return (
     <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author"/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
    )
  }
}

export default Search


/*

A PARTIR DAQUI É O CÓDIGO DO ListContacts => arquivo que continha a lógica pra form que se atualiza automatico

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
  }

  
*/