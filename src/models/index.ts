import sequelize from "../config/init-db";

const User = sequelize.import("./User");

sequelize.sync();

export { User, sequelize };
