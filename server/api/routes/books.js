const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/books');

router.route('/')
    .get(bookCtrl.getAllBooks)
    .post(bookCtrl.createNewBook);

router.route('/:id')
    .get(bookCtrl.getBookById)
    .put(bookCtrl.editBook)
    .delete(bookCtrl.deleteBook)

module.exports = router;