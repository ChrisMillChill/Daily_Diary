const mongoose = require('mongoose')

const JournalSchema = new mongoose.Schema({
  journalSubject: {
    type: String,
    required: true,
  },
  journalDate: {
    type: String,
    required: true,
  },
  journalEntry: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Journal', JournalSchema)

