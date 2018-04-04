import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBooks } from '../../actions/books';
import Book from './Book';


class BookContainer extends Component {

    componentWillMount() {
        this.props.dispatch(getBooks())
    }
    showBooks = (books) => {
       return books.shelf ?
            books.shelf.map(b=>
            <Book
                key={b._id}
                name={b.name}
                author={b.author}
                price={b.price}
                rating={b.rating}
                id={b._id}
            />)
            : `There are now books right now`
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <header>
                    <h1 className='logo'><Link to='/books'>All Books</Link></h1>
                </header>
                {this.showBooks(this.props.books)}
                <div className="container text-center" style={{ display: "flex" }}>
                    <button style={{ flex: 1 }} className='btn btn-lg btn-success'><Link to='/'>Return to start page</Link></button>
                    <button style={{ flex: 1 }} className='btn btn-lg btn-danger'><Link to='/books/add-book'>Create new book</Link></button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    books: state.books
})

export default connect(mapStateToProps)(BookContainer)