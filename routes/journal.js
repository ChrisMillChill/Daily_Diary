const express = require('express')
const router = express.Router()
const journalController = require('../controllers/journal') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, journalController.getJournal)

router.post('/createJournalEntry', journalController.createJournalEntry)

router.delete('/deleteJournalEntry', journalController.deleteJournalEntry)

module.exports = router

