import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCollection } from '../../actions/collections';
import { Link } from 'react-router-dom';

class CollectionDetails extends Component {

    componentWillMount() {
        this.props.dispatch(getCollection(this.props.match.params.id))
    }

    renderDetails = (collections) => (
        collections.collection && collections.collection.books.length > 0 ?
            <div className='container text-center'>
                {collections.collection.books.map(book =>
                    <ul className='col-md-12 text-center' key={book._id}>
                        <li>{book.name}</li>
                    </ul>)}
                <button className='btn btn-lg btn-primary'> <Link to={`/collections/${this.props.collections.collection._id}/books`}>Add book</Link></button>
            </div>
            :
            <div className='container text-center'>
                <h1> There are no books</h1>
                <div className="loader">Loading...</div>
                <button className='btn btn-lg btn-primary'><Link to={`${this.props.match.params.id}/books`}>Add book</Link></button>
            </div>
    )
    render() {
        console.log(this.props)
        return (
            <div>
                <header>
                    <h1 className='logo'> <Link to='/collections'>All Collections</Link></h1>
                </header>
                {this.renderDetails(this.props.collections)}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    collections: state.collections
})


export default connect(mapStateToProps)(CollectionDetails)