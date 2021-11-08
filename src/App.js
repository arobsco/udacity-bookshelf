import React, { Component } from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';

import ListBooks from '@Views/ListBooks';
import SearchBooks from '@Views/SearchBooks';

import * as BooksAPI from '@Utils/BooksAPI';

import './App.css';

class App extends Component {
  state = {
    shelves: [
      {
        title: 'Currently Reading',
        id: 'currentlyReading',
        books: [],
      },
      {
        title: 'Want to Read',
        id: 'wantToRead',
        books: [],
      },
      {
        title: 'Read',
        id: 'read',
        books: [],
      }
    ]
  }

 getBooks = () => {
  BooksAPI.getAll().then(books => {
    this.setState(() => ({
      shelves: this.state.shelves.map(shelf => {
        return {
          ...shelf,
          books: books.filter(book => book.shelf === shelf.id)
        }
      })
    }))
  })
  };

  componentDidMount(){
    this.getBooks();
  };

  render() {
    return (
      <div className='app'>
        <Routes>
          <Route exact path='/' element={<ListBooks shelves={this.state.shelves} getBooks={this.getBooks}/>}/>
          <Route path='/search' element={<SearchBooks shelves={this.state.shelves} getBooks={this.getBooks}/>}/>
        </Routes>
      </div>
    )
  }
}

export default App;
