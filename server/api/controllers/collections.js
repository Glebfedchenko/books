const mongoose = require('mongoose');
const { Collection } = require('../../models/Collections');
const { Book } = require('../../models/Book');

module.exports = {
    getAllCollections: (req, res, next) => {
        Collection.find()
            .exec()
            .then(docs => {
                if (docs.length > 0) {
                    res.status(200).send(docs)
                } else {
                    res.status(404).json({
                        message: 'There are no collections to show'
                    })
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },

    createNewCollection: (req, res, next) => {
        const newCollection = new Collection(req.body);
        newCollection.save()
            .then(doc => {
                res.status(200).send(doc)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    message: `Can't create new collection`
                })
            })
    },

    getCollectionById: async (req, res, next) => {
        const id = req.params.id;
        const collection = await Collection.findById(id).populate('books').exec()
        res.status(200).json(collection);
    },

    editCollection: (req, res, next) => {
        const id = req.params.id;
        Collection.findByIdAndUpdate(id, req.body)
            .then(doc => {
                Collection.findById(id)
                    .then(doc => {
                        res.status(200).send(doc)
                    })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err })
            })
    },

    deleteCollection: (req, res, next) => {
        const id = req.params.id;
        Collection.findOneAndRemove(id)
            .then(doc => {
                res.status(200).send(doc)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err })
            })
    },
    addBookToCollection: async (req, res, next) => {
        const id = req.params.id;
        const newBook = new Book(req.body);
        const collection = await Collection.findById(id);
        newBook.type = collection;
        await newBook.save()
        collection.books.push(newBook);
        await collection.save()
        res.status(200).json(newBook)
    }

}