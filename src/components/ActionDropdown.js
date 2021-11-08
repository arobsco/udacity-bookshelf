import React, { Component } from 'react';
import * as BooksAPI from '@Utils/BooksAPI';

class ActionDropdown extends Component {
    state = {
        value: undefined
    }
    onChange = e => {
        this.setState({
            value: e.target.value
        })
        BooksAPI.update(this.props.book, e.target.value).then(
            setTimeout(() => {
                this.props.getBooks()
            }, 500)
            
        );
        
    }

    componentDidMount() {
        const { book, shelves } = this.props;
        if (book.shelf) {
            this.setState({
                value: book.shelf
            })
        } else {
            shelves.forEach(shelf => {
                shelf.books.forEach(bookInShelf => {
                    if (bookInShelf.id === book.id) {
                        this.setState({
                            value: shelf.id
                        })
                    }
                })
            })
        }
    }

    render () {
        const { shelves } = this.props;
        const { value } = this.state;
        return (
            <div className='book-shelf-changer'>
            <select onChange={this.onChange} value={value} defaultValue={'move'}>
                <option value='move' key={'move'} disabled>Move to...</option>
                {shelves.map(shelf => (
                    <option value={shelf.id} key={shelf.id}>{shelf.title}</option>
                ))}
            </select>
          </div>
        )
    }
}
export default ActionDropdown;