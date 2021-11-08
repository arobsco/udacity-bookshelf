import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import BookShelf from '@Components/BookShelf';
import Header from '@Components/Header';
import ShelfTitle from '../components/ShelfTitle';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

class ListBooks extends Component {
    render() {
      const { shelves, getBooks } = this.props;
      return (
        <div className='list-books'>
          <Header />
          <div className='list-books-content'>
            <div>
            {shelves.map((shelf, index) => (
              <div className='bookshelf' key={shelf.id}>
              <ShelfTitle title={shelf.title} />
              <div className='bookshelf-books'>
                <BookShelf books={shelf.books} shelves={shelves} getBooks={getBooks} />
              </div>
            </div>
            ))}
            <div className='open-search'>
                <Link to='/search'><button aria-label='Search for a book'><FontAwesomeIcon icon={faSearch}/></button></Link>
            </div>
            </div>
        </div>
    </div>
      )
    }
}

export default ListBooks;