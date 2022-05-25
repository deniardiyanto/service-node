'use strict';

const { Sequelize } = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('brand', { 
      CD_BRAND: {
        type:Sequelize.STRING,
        allowNull:false
      },
      DESC_BRAND: {
        type:Sequelize.STRING,
        allowNull:false
      },
      CREATED_AT: {
        type:Sequelize.DATE,
        allowNull:false
      },
      UPDATED_AT: {
        type:Sequelize.DATE,
        allowNull:false
      }
    }
    );
  
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('brand');
   
  }
};
