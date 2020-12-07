import express, { Router } from 'express';
import createError from 'http-errors';
import mongoose from 'mongoose';

import config from './config.js';

import indexRouter from './routes/index.js';
import userRouter from './routes/user.js';
import articleRouter from './routes/article.js';

const app = express();
app.use(express.json());
app.use('/', indexRouter(Router()));
app.use('/user', userRouter(Router()));
app.use('/article', articleRouter(Router()));

const connect = mongoose.connect(config.mongo.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then((db) => {
    console.log('Connected correctly to server')
}, (err) => { console.log(err) });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // render the error page
    res.status(err.status || 500).send({
        message: err.message,
        error: err
    });
});

export default app;
