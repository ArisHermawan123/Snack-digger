const { DataTypes } = require("sequelize");
const db = require("../config/db.config");

const images = db.define(
  "images",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "images" }
);

db.sync();

module.exports = images;
