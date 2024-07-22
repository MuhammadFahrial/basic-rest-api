import { Sequelize } from "sequelize";

const db = new Sequelize("basic_rest_api_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
