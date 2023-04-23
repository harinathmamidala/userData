const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'must provide firstname'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  lastname:{
    type: String,
    required: [true, 'must provide lastname'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  gender: {
    type: String,
    required: [true, 'must provide gender']
  },
  country: {
    type: String,
    required:[true,'must provide country']
  },
  phone: {
    type: String,
    required: [true, 'must provide phonenumber'],
    maxlength: [10, 'nmuber can not be more than 10 characters'],
  }
})

module.exports = mongoose.model('Task', TaskSchema)
