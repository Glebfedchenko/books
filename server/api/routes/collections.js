const express = require('express');
const router = express.Router();
const collectionCtrl = require('../controllers/collections');

router.route('/')
    .get(collectionCtrl.getAllCollections)
    .post(collectionCtrl.createNewCollection);

router.route('/:id')
    .get(collectionCtrl.getCollectionById)
    .put(collectionCtrl.editCollection)
    .delete(collectionCtrl.deleteCollection);

router.route('/:id/books')
    .post(collectionCtrl.addBookToCollection)

module.exports = router;