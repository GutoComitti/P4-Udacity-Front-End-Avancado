import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class MoveBook extends Component {

  render() {

  	const changeShelf = (event) =>{

  		console.log(event)
  		// BooksAPI.update(this.props.book, value).then((e) =>{})
  	}

    return (
       <select onChange={changeShelf(this)}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default MoveBook