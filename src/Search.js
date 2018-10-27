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

A PARTIR DAQUI É O CÓDIGO DO CreateContact => arquivo que continha a lógica pra form que se atualiza automatico






import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize'

class CreateContact extends Component{
  handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    if (this.props.onCreateContact)
      this.props.onCreateContact(values)
  }
  render(){
    return (
      <div>
        <Link className="close-create-contact" to="/">Close</Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="email" placeholder="Email"/>
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateContact
*/