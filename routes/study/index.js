const express = require('express');
const javaRouter = require('./java');
const jsRouter = require('./js')
const router = express.Router();

module.exports = () => {
    router.use('/java', javaRouter());
    router.use('/javascript', jsRouter());
    return router;
}