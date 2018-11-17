const mongoose = require('mongoose');
const validator = require('validator');

const nameSchema = new mongoose.Schema({
  first: {
    type: String,
    required: [true, 'First name is required!'],
    minlength: [3, 'First name is too short!'],
    maxlength: [32, 'First name is too long!'],
    validate: {
      validator: validator.isAlpha,
      message: props => `${props.value} is not a valid first name!`
    }
  },
  last: {
    type: String,
    required: [true, 'Last name is required!'],
    minlength: [3, 'Last name is too short!'],
    maxlength: [32, 'Last name is too long!'],
    validate: {
      validator: validator.isAlpha,
      message: props => `${props.value} is not a valid last name!`
    }
  }
});
const userSchema = new mongoose.Schema({
  name: { type: nameSchema, required: [true, 'Name is required'] },
  email: {
    type: String,
    minlength: [9, 'Email is too short!'],
    maxlength: [128, 'Email is too long'],
    required: [true, 'Email is required!'],
    validate: {
      validator: validator.isEmail,
      message: props => `${props.value} is not a valid email!`
    }
  },
  username: {
    type: String,
    unique: true,
    minlength: [3, 'Username is too short!'],
    maxlength: [16, 'Username is too long!'],
    required: [true, 'Username is required!'],
    validate: {
      validator: validator.isAlphanumeric,
      message: props => `${props.value} is not a valid username!`
    }
  },
  salt: String,
  hash: String,
  isVerified: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
