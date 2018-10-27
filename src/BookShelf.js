import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component {

  state = {
  	shelfBooks: []
  }
// getAllBooks = () => ()

  	componentDidMount() {
  		BooksAPI.getAll().then((books) => {

  			let booksInTheShelf = books.filter(() => books.shelf === this.props.shelf)
  			console.log(`booksInTheShelf: ${booksInTheShelf}`)


  			this.setState({shelfBooks: booksInTheShelf})
  		})
  	}

  render() {
  	debugger
  	console.log("chegou no bookShelf.render()")
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




  	console.log(`this.state.shelfBooks: ${this.state.shelfBooks}`)

    return (
	  <div className="bookshelf">
	    <h2 className="bookshelf-title">{shelfType}</h2>
	    <div className="bookshelf-books">
	      <ol className="books-grid">
	      {this.state.shelfBooks.map((elemBook) => (
	      	<li>
	        <Book book={elemBook} key={elemBook.id}/>
	        </li>
	      	))}


		  </ol>
	    </div>
	  </div>
    )
  }
}

export default BookShelf