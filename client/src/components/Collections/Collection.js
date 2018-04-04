import React from 'react';
import { Link } from 'react-router-dom';

const Collection = ({ _id, name, description, books }) =>
    <div className='col'>
        <h1>{name}</h1>
        <div>
            <h4>{description}</h4>
        </div>
        <button className='btn col-books-btn'>
            <Link className='col-books' to={`/collections/${_id}`}>Collection books</Link>
        </button>
    </div>
export default Collection