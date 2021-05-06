const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns:
    // ID (INTEGER, NOT NULL, PRIMARY KEY, AUTO_INCREMENT),
    // product_id (INTEGER, REFERENCES PRODUCT MODEL'S ID),
    // tag_id (INTEGER, REFERENCES TAG MODEL'S ID)
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
