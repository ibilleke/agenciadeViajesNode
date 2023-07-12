import Sequelize from 'sequelize';
import dotenv from 'dotenv/config';

const db = new Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
    port: process.env.MYSQLHOST,
    dialect: process.env.MYSQLPORT,
    dialect: 'mysql',
    define: {
        timestamps: false,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;