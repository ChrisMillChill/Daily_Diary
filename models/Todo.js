const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  entryDate: {
    type: String,
    required: true,
  },
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
