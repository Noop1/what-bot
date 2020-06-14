const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("postgres://postgres:newPassword@localhost/bot", {
  dialect: 'postgres',
  logging: false,
});

const User = sequelize.define('user', {
  vkId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  nickName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

  isBanned: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

User.sync({
  alter: true
});

module.exports = User;
