const express = require('express');
const ausRouter = require('./aus');
const vnRouter = require('./vietnam')
const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.send('This is life page!')
    });
    
    router.use('/aus-life', ausRouter());
    router.use('/vietnam-life', vnRouter());
    return router;
}