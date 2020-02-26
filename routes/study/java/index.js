const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        console.log('In study');
        return res.render('java/index');
    })
    return router;
}