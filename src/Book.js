import MoveBook from './MoveBook'
import React, { Component } from 'react'
class Book extends Component {

  render() {


    console.log('tá atualizando book');

    return (
<div className="book">
  <div className="book-top">
  {(this.props.book.imageLinks && this.props.book.imageLinks.smallThumbnail) && (
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+this.props.book.imageLinks.smallThumbnail+')' }}></div>
  )}
  {(!this.props.book.imageLinks || !this.props.book.imageLinks.smallThumbnail) && (
    <div className="book-cover" 
    style={{ width: 128, height: 193, 'borderStyle': 'solid', 'borderWidth': '1px', 'textAlign': 'center'}}>
    UNAVAILABLE COVER</div>
    )}
    
    <div className="book-shelf-changer">
      <MoveBook 
      allBooks={this.props.allBooks} 
      updateBook={this.props.updateBook} 
      book={this.props.book} 
      />
    </div>
  </div>
  <div className="book-title">{this.props.book.title}</div>
  {(this.props.book && this.props.book.authors) &&(
  <div className="book-authors">{this.props.book.authors.join(' & ')}</div>
    )}
</div>
    )
  }
}

export default Book