// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    // define columns: 
    // id (INT, NOT NULL, PRIMARY KEY, AUTO_INCREMENT), 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // product_name (STRING, NOT NULL), 
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // price (DECIMAL, NOT NULL, VALIDATE THAT VALUE IS DECIMAL), 
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    // stock (INTEGER, NOT NULL, DEFAULT VALUE = 10, VALIDATES THAT VALUE IS NUMERIC), 
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNaN: false
      }
    },
    // category_id (INTEGER, REFERENCES CATEGORY MODEL'S ID)
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
        unique: false
      }
    },
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
