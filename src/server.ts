import express from 'express';
import mongoose from 'mongoose';

import * as indexController from './controllers/index';

import * as mongoDBConfig from './config/mongo';

const app = express();

const mongoUrl = mongoDBConfig.URL;
mongoose.connect(mongoUrl, {useNewUrlParser: true}, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('mongodb connected!');
    }
});

app.get('/', indexController.index);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
