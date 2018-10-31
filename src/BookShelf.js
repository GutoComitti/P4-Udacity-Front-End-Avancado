import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

  render() {
  	let shelfType = '';
  	switch(this.props.shelf){
  		case "wantToRead":
  			shelfType = "Want to Read";
  			break;
  		case "currentlyReading":
  			shelfType = "Currently Reading";
  			break;
  		case "read":
  			shelfType = "Read";
  			break;
  		default: 
  			shelfType = "Invalid Shelf Type!!";
  	};
  	// Code to test which book is in which shelf
  	// this.props.allBooks.map((book)=>{console.log(`${book.title} está na prateleira ${book.shelf}`)});

    return (
	  <div className="bookshelf">
	    <h2 className="bookshelf-title">{shelfType}</h2>
	    <div className="bookshelf-books">
	      <ol className="books-grid">
	      {this.props.allBooks.filter((book) => (book.shelf === this.props.shelf)).map((elemBook) => (
	      	<li>
	        <Book allBooks={this.props.allBooks} updateBook={this.props.updateBook} book={elemBook} key={elemBook.id}/>
	        </li>
	      	))}
		  </ol>
	    </div>
	  </div>
    )
  }
}

export default BookShelf