import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/** 
 This course is not designed to teach Test Driven Development. 
 Feel free to use this file to test your application, but it 
 is not required.
**/

describe ('Main section', () =>{	
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	});

	it ('shows your latest "acquisitions" as soon as it renders', () => {

	});

	it ('should have a link for the search page', () => {

	});
});

describe ('Books', () =>{
	it('has the same state in the search and main sections', () => {

	});

	it('is moved when other shelf is selected', () => {

	});
});

describe ('Search section', () =>{
	it('has a search field that shows matching books instantaneously as it\'s typed on', () => {

	});

});

