import React from 'react';
import ActionDropdown from './ActionDropdown';

const Book = ({ shelves, book, getBooks }) => {
    const backgroundImage = (book.imageLinks && book.imageLinks.thumbnail) ? `url(${book.imageLinks.thumbnail})` : '';
    return (
        <li>
        <div className='book'>
          <div className='book-top'>
            <div className='book-cover' style={{ width: 128, height: 193, backgroundImage}}></div>
            <ActionDropdown shelves={shelves} book={book} getBooks={getBooks} />
          </div>
          <div className='book-title'>{book.title}</div>
          {book.authors && book.authors.map(author => {return <div className='book-authors' key={author}>{author}</div>;})}
        </div>
      </li>
    )
}

export default Book;

