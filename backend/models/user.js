const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken")
const JWT_SECRET_KEY = 'adff'
const userSchema = mongoose.Schema({
    firstName: {
      trim: true,
      type: String,
      required: true,
    },
    lastName: 
    {
      trim: true,
      type: String,
      required: true,
    },
    email: 
    {
      trim: true,
      type: String,
      required: true,
      unique: true,
    },
    password: 
    {
      trim: true,
      type: String,
    }


  });

  userSchema.pre('save', async function(next) {
  if (this.isModified("password"))
  {
    console.log({before: this.password});
    this.password = await bcrypt.hash(this.password, 1)
    console.log({after: this.password});
  }
  next() })

  userSchema.methods.generateToken = function () {
    const user = this;
    const token = jwt.sign({id: user._id}, JWT_SECRET_KEY, {
      expiresIn: '365d'
    })
    return token;
  }
 
const Author = mongoose.model("User", userSchema);

module.exports = Author;