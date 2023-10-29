import { Schema, model } from 'mongoose';

var userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
    },
    profilePic: {
      type: String,
      default:
        'https://res.cloudinary.com/dbmujhmpe/image/upload/v1691666473/wanderplan/j7nkqvajk2ppfdfqqpkt.png',
    },

    forgotPassOtp: {
      otp: {
        type: String,
      },
      expirationTime: {
        type: Number,
      },
      verified: {
        type: Number,
      },
    },
    ban: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//Export the model
export default model('User', userSchema);
