import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ id, name, price, rating }) =>
    <div className='col'>
        <h1>{name}</h1>
        <div>
           Cost: {price} USD
        </div>
        <div>
           Rating: &#10026; {rating}
        </div>
        <button className='btn btn-primary'>
            <Link className='col-books' to={`/books/${id}`}>Explore</Link>
        </button>
        <button className='btn btn-warning'>
            <Link className='col-books' to={`/books/${id}`}>Edit</Link>
        </button>
    </div>
export default Book