const mongoose = require('mongoose');
const { Book } = require('../../models/Book');
module.exports = {
    getAllBooks: (req, res, next) => {
        Book.find()
            .exec()
            .then(docs => {
                if (docs.length > 0) {
                    res.status(200).json(docs)
                } else {
                    res.status(404).json({
                        message: 'There are no books to show'
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

    getBookById: (req, res, next) => {
        const id = req.params.id;
        Book.findById(id)
            .exec()
            .then(doc => {
                res.status(200).send(doc);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },

    createNewBook: (req, res, next) => {
        const book = new Book(req.body);
        book.save((err, doc) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({
                post: true,
                bookId: doc.id
            });
        });
    },

    editBook: (req, res, next) => {
        const id = req.params.id;
        Book.findByIdAndUpdate(id, req.body)
            .exec()
            .then(doc => {
                Book.findById(id).exec()
                    .then(doc => {
                        res.status(200).send(doc)
                    })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err })
            });
    },

    deleteBook: (req, res, next) => {
        const id = req.params.id;
        Book.findByIdAndRemove(id)
            .exec()
            .then(doc => {
                res.status(200).send(doc)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: err })
            });
    }
};