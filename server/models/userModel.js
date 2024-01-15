import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.connection.js';

const User = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },

    password: {
      type: DataTypes.STRING,
    },
    profilePic: {
      type: DataTypes.STRING,
      defaultValue:
        'https://res.cloudinary.com/dbmujhmpe/image/upload/v1691666473/wanderplan/j7nkqvajk2ppfdfqqpkt.png',
    },
    forgotPassOtp: {
      type: DataTypes.STRING,
    },
    forgotPassOtpExpiryTime: {
      type: DataTypes.DATE,
    },
    forgotPassOtpVerifiedTime: {
      type: DataTypes.DATE,
    },
    ban: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { timestamps: true }
);

//Export the model
export default User;
