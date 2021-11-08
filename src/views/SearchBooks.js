import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BookShelf from '@Components/BookShelf';

import { faChevronLeft, faExclamationCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

import * as BooksAPI from '@Utils/BooksAPI';


class SearchBooks extends Component {
    state= {
        query: '',
        books: [],
        error: ''
    };
    updateQuery = query => {
        this.setState({ query })
        BooksAPI.search(query).then(response => {
            if (response) {
              if(response.error === 'empty query') {
                this.setState({ books: [], error: response.error });
              } else {
                this.setState({ books: response, error: '' });
              }
            } else {
              this.setState({ books: [], error: '' });
            }
        })
    };
    OutputLogic = () => {
      const { books } = this.state;
      const { shelves, getBooks } = this.props;
      if (books.length > 0) {
        return (
          <ol className='books-grid'>
            <BookShelf books={books} shelves={shelves} getBooks={getBooks} />
          </ol>
        )
      } else if (this.state.error ==='empty query') {
        return (<div className='error'><FontAwesomeIcon icon={faExclamationCircle} /> No Results Found - Please Try a Different Query!</div>)
      } else {
        return (<div className='search-text'><FontAwesomeIcon icon={faSearch} /> Hello! Please perform a search above</div>)
      }
    }
    render() {
        const { query } = this.props;
        return (
            <div className='search-books'>
            <div className='search-books-bar'>
              <Link to='/'><button className='close-search'><FontAwesomeIcon icon={faChevronLeft}/></button></Link>
              <div className='search-books-input-wrapper'>
                <input type='text' placeholder='Search by title or author' value={query} onChange={e => this.updateQuery(e.target.value)}/>
              </div>
            </div>
            <div className='search-books-results'>
              {this.OutputLogic()}
            </div>
          </div>
        )
    }
}

export default SearchBooks;