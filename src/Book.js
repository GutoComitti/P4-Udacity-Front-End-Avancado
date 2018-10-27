import MoveBook from './MoveBook'
import React, { Component } from 'react'
class Book extends Component {
  state = {
    
  }

  render() {
    console.log("chegou no book.render()")
    return (
<div className="book">
  <div className="book-top">
    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(`${this.props.book.imageLinks.smallThumbnail}`)' }}></div>
    <div className="book-shelf-changer">

    </div>
  </div>
  <div className="book-title">To Kill a Mockingbird</div>
  <div className="book-authors">Harper Lee</div>
</div>
    )
  }
}

export default Book