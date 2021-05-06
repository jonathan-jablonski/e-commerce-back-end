// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns: 
    // id (INT, NOT NULL, PRIMARY KEY, AUTO_INCREMENT), 
    // product_name (STRING, NOT NULL), price (DECIMAL, NOT NULL, VALIDATE THAT VALUE IS DECIMAL), 
    // stock (INTEGER, NOT NULL, DEFAULT VALUE = 10, VALIDATES THAT VALUE IS NUMERIC), 
    // category_id (INTEGER, REFERENCES CATEGORY MODEL'S ID)
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
