// Load .env configuration file
require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 8000,
    isHttps: process.env.isHttps || false,
    sessionSecretKey: process.env.sessionSecretKey,
    sfloginUrl: process.env.sfloginUrl,
    sfclientId: process.env.sfclientId,
    sfclientSecret: process.env.sfclientSecret,
    sfredirectUri: process.env.sfredirectUri,
    REDIS_URL: process.env.REDIS_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    REDIS_USER_SESSIONS_DB: process.env.REDIS_USER_SESSIONS_DB,
    JWT_SECRET: process.env.JWT_SECRET
}