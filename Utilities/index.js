const https = require('https');
const AUTH_ERROR_MESSAGE = "Login Olmanız Gerekmektedir."
const CATEGORY_ADDED_MESSAGE = "KATEGORİ EKLENMİŞTİR."

const agent = new https.Agent({
    rejectUnauthorized: false
});

module.exports = {
    agent: agent,
    AUTH_ERROR_MESSAGE,
    CATEGORY_ADDED_MESSAGE
}