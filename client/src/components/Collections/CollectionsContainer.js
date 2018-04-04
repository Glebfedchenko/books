import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCollections } from '../../actions/collections';
import Collection from './Collection';

class CollectionsContainer extends Component {

    componentWillMount() {
        this.props.dispatch(getCollections())
    }
    showCollections = (data) => {
        return data.collections ?
            data.collections.map((c, i) =>
                <Collection
                    key={i}
                    _id={c._id}
                    name={c.name}
                    description={c.description}
                    books={c.books} />
            ) : `There are no collections right now`
    }

    render() {
        return (
            <div>
                <header>
                    <h1 className='logo'><Link to='/collections'>All Collections</Link></h1>
                </header>
                <div className='col-container'>
                    {this.showCollections(this.props.collections)}
                </div>
                <br/>
                <div className="container text-center" style={{display:"flex"}}>
                    <button style={{flex:1}} className='btn btn-lg btn-success'><Link to='/'>Return to start page</Link></button>
                    <button style={{flex:1}} className='btn btn-lg btn-danger'><Link to='/collection/add-collection'>Create new collection</Link></button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    collections: state.collections
})

export default connect(mapStateToProps)(CollectionsContainer)