import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import CollectionsContainer from './Collections/CollectionsContainer';
import CollectionDetails from './Collections/CollectionDetails';
import AddCollection from './Collections/AddCollection';
import BooksContainer from './Books/BookContainer';
import AddBook from './Books/AddBook';

const Routes = () =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/collections' component={CollectionsContainer} />
        <Route exact path='/collections/:id' component={CollectionDetails} />
        <Route exact path='/collections/:id/books' component={AddBook} />
        <Route exact path='/collection/add-collection' component={AddCollection} />
        <Route exact path='/books' component={BooksContainer} />
    </Switch>

export default Routes