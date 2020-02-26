const express = require('express');
const path = require('path');
const app =  express();
const createError = require('http-errors');

const routes = require('./routes');

app.use(express.static('views'));
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}
app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, '/views'));
app.use('/', routes())

app.use((req, res, next) => {
    return next(createError(404, 'File not found'));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    const status = err.status || 500;
    res.locals.status = status;
    res.locals.error = req.app.get('env') === 'development';
    return res.render('error');
});

app.listen(3000);

module.export = app;