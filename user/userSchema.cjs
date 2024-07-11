const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name:String,
  email: String,
  password: String,
  cep: String,
  num: Number,
  adress: String,
  plus: String,
  cpf: String,
  birth: Date,
  cellNum:String,
});


const User = mongoose.model('User', userSchema);

module.exports = User;
