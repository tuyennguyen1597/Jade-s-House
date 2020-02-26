const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.render('friends/index');
    })

    router.get('/:name', (req, res, next) => {
        return res.send(`You're accessing to ${req.params.name} page`)
    })
    return router;
}