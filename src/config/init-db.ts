// import * as Sequelize from 'sequelize';
const Sequelize = require("sequelize");

const sequelize = new Sequelize("xjbq", "root", "Mysql000000", {
  dialect: "sqlite",
  logging: false,
  storage: "./database.sqlite",
  sync: { force: false },
});

export default sequelize;
