const express = require('express');
const lifeRouter = require('./life');
const friendsRouter = require('./friends');
const studyRouter = require('./study');
const router =  express.Router();
module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.render('index');
    });

    router.use('/life', lifeRouter());
    router.use('/friends', friendsRouter());
    router.use('/study', studyRouter());
    return router;
}