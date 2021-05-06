const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns:
    // ID (INTEGER, NOT NULL, PRIMARY KEY, AUTO_INCREMENT)
    // category_name (STRING, NOT NULL)
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
