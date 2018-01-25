import React, { Component } from 'react';
import { connect } from 'react-redux';

// promote BookList to a container by first importing connect from react-redux,
// then defined mapStatetoProps, then hooked component together with connect function
// only BookList cares about the list of books
// Made sure app actually rendered the booklist

// A container is an ormal react component that gets bonded to an application state
// whenever app state changes, the container will re-render 

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // takes return from selectBook and makes sure it flows through our applications

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// whenever app state is changed, the container will instantly re-render with new list of books
function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of bookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props 
// on the bookList container (this.props.selectBook will call our action creator)
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
  // the purpose is to take whats returned from selectBook and makes sure it flows through
  // all the reducers
}
// produces a container.  Aware of the state
// whenever app state changes, the object in the state function will be assigned as this.props 
// in the component

// Promote bookList from a component a container - it needs to know
// about this new dispatch method, selectBook.  Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);


