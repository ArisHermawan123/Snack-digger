const { DataTypes } = require("sequelize");
const db = require("../config/db.config");
// const { IsEmail } = require("express-validator");

const user = db.define(
  "Users",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // required: [true, "Please enter an email"],
      // unique: true,
      // lowercase: true,
      // validate: [IsEmail, "Please enter an valid email"],
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // required: [true, "Please enter an password "],
      // minLength: [true, "Minumum password 6 charackter"],
    },
  },
  { tableName: "Users" }
);

db.sync();

module.exports = user;
