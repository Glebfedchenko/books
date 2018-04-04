import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBook} from '../../actions/books';

class AddBook extends Component {
    state = {
        formdata: {
            name: '',
            author: '',
            price: '',
            rating: ''
        }
    }
    handleInput = (e, name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = e.target.value
        this.setState({ formdata: newFormdata })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(addBook({ ...this.state.formdata}))
        this.props.history.push(`/collections/${this.props.match.params.id}`)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <header>
                    <h1 className='logo'><Link to='/books'>Back to books</Link></h1>
                </header>
                <div className="rl_container article">
                    <form onSubmit={this.onSubmit}>
                        <h2>Add book</h2>
                        <div className="form_element">
                            <input
                                type="text"
                                placeholder='Enter book name'
                                value={this.state.formdata.name}
                                onChange={(e) => this.handleInput(e, 'name')}
                            />
                        </div>
                        <div className="form_element">
                            <input
                                type="text"
                                placeholder='Enter author'
                                value={this.state.formdata.author}
                                onChange={(e) => this.handleInput(e, 'author')}
                            />
                        </div>
                        <div className="form_element">
                            <input
                                type="number"
                                placeholder='Enter price'
                                value={this.state.formdata.price}
                                onChange={(e) => this.handleInput(e, 'price')}
                            />
                        </div>
                        <div className="form_element">
                            <select value={this.state.formdata.rating}
                                onChange={(e) => this.handleInput(e, 'rating')}>
                                <option value="">Rate a book</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <button type='submit'>Add book</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    collections: state.collections
})

export default connect(mapStateToProps)(AddBook)