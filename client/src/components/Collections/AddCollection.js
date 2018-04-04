import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCollection } from '../../actions/collections';

class AddCollection extends Component {
    state = {
        formdata: {
            name: '',
            description: ''
        }
    }
    handleInput = (e, name) => {
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = e.target.value
        this.setState({ formdata: newFormdata })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(addCollection({ ...this.state.formdata }))
        this.props.history.push('/collections')
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <header>
                    <h1 className='logo'><Link to='/collections'>All Collections</Link></h1>
                </header>
                <div className="rl_container article">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Add a collection</h2>
                        <div className="form_element">
                            <input
                                type="text"
                                placeholder='Enter collection name'
                                value={this.state.formdata.name}
                                onChange={(e) => this.handleInput(e, 'name')}
                            />
                        </div>
                        <div className="form_element">
                            <input
                                type="text"
                                placeholder='Enter collection description'
                                value={this.state.formdata.description}
                                onChange={(e) => this.handleInput(e, 'description')}
                            />
                        </div>
                        <button type='submit'>Add collection</button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    collections: state.collections
})

export default connect(mapStateToProps)(AddCollection)