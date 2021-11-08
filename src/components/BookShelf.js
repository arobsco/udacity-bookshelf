import React from 'react';
import Book from './Book';

const BookShelf = ({ books, shelves, getBooks }) => {
    return (
          <ol className='books-grid'>
            {books.map((book) => (
              <Book book={book} shelves={shelves} getBooks={getBooks} key={book.id}/>
            ))}
          </ol>
    )
}

export default BookShelf;