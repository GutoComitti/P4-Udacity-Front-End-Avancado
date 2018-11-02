import './App.css'
import React, { Component } from 'react'
import BookShelf from './BookShelf'
import Search from './Search'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {

	state = {
		allBooks: [],
    	query: '',
    	showingBooks: []
	}

  	updateQuery = (query) => {
    	this.setState({
      		query: query.trim()
    	});
  	}

	updateBook = (book, shelf) =>{
		book.shelf = shelf;
		this.setState((prevState) => {
	  		//If the book wasn't in the array (any shelf), it includes the book in the array
  			if (!this.state.allBooks.includes(book)){
  				prevState.allBooks.push(book);
  			}else{
  			//else, it just updates the state.
				prevState.allBooks.forEach((shelfsBook) => {
					if(shelfsBook.id === book.id){
						shelfsBook = book
					}
				});
  			}
	  		return {allBooks: prevState.allBooks}
  		})
	}

  	componentDidMount() {
  		BooksAPI.getAll().then((books) => {
  			this.setState({allBooks: books})
  		})
  	}

	render() {
		console.log(this.state.allBooks);
		if (this.state.query){
			BooksAPI.search(this.state.query).then((books) =>{
				if (books.length > 0){
					this.setState({showingBooks: books});
				}else{
					this.setState({showingBooks: []});
				}
			})
		}
    	return (
    		<div>
	    		<Route exact path="/" render={() => (
	    			<div className="app">
		        		<div className="list-books">
		            		<div className="list-books-title">
		            			<h1>MyReads</h1>
		            		</div>
		            		<div className="list-books-content">
					            <BookShelf 
					            allBooks={this.state.allBooks} 
					            updateBook={this.updateBook} 
					            shelf='currentlyReading' 
					            />
					            <BookShelf 
					            allBooks={this.state.allBooks} 
					            updateBook={this.updateBook} 
					            shelf='wantToRead' 
					            />
					            <BookShelf 
					            allBooks={this.state.allBooks} 
					            updateBook={this.updateBook} 
					            shelf='read' 
					            />
		            		</div>
		            		<div className="open-search">
		            			<Link to="/search">Add a book</Link>
		            		</div>
		        		</div>
	    			</div>
	      		)}
	      		/>

		      	<Route path="/search" render={({ history }) => (
		      		<Search 
		      		updateBook={this.updateBook}
		      		showingBooks={this.state.showingBooks} 
		      		updateQuery={this.updateQuery} 
		      		query={this.state.query} 
		      		allBooks={this.state.allBooks}
		      		/>
		      	)}/>
		    </div>



    		
    	)
	}
}

export default BooksApp
