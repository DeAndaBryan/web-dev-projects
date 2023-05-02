const  mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;
const { Schema, model } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long'],
    },
    picture: {
        type: String,
        required: [true, 'Picture is not required'],
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
});

userSchema.methods.comparePassword = function (password, callback) {
    bcrypt.compare(password, this.password, function(error, isMatch) {
        if (error) {
            return callback(error);
        } else {
            callback(null, isMatch);
        }
    });
};

userSchema.pre("save", function (next) {
    const user = this;
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(SALT_ROUNDS, function (saltError, salt) {
        if (saltError) {
          return next(saltError);
        } else {
          bcrypt.hash(user.password, salt, function (hashError, hash) {
            if (hashError) {
              return next(hashError);
            }
            user.password = hash;
            next();
          });
        }
      });
    } else {
      next();
    }
  });
const User = model("User", userSchema);
module.exports = User;
