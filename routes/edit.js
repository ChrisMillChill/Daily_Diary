// Handles POST method to edit an entry

const express = require('express');
const router = express.Router();
const editController = require('../controllers/edit');

// Router to edit a post
router.get('/:id', editController.getEdit);
router.post('/:id', editController.editEntry);

module.exports = router;