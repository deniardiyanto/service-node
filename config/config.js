require('dotenv').config();

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
    DB_HOSTNAME,
    DB_CONNECTION
} = process.env;

module.exports = {
    "development": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "host": DB_HOSTNAME,
        "dialect": DB_CONNECTION
    },
    "test": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "host": DB_HOSTNAME,
        "dialect": DB_CONNECTION
    },
    "production": {
        "username": DB_USERNAME,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "host": DB_HOSTNAME,
        "dialect": DB_CONNECTION
    }
}