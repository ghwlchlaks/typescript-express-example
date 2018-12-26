import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

import * as boardController from './controllers/board';
import * as indexController from './controllers/index';

import * as mongoDBConfig from './config/mongo';

const app = express();

/* mongodb connect */
const mongoUrl = mongoDBConfig.URL;
mongoose.connect(mongoUrl, {useNewUrlParser: true}, (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('mongodb connected!');
    }
});

app.use(bodyParser.json());

/* index routes */
app.get('/', indexController.index);

/* board routes */
app.get('/boards', boardController.getAllBoard);
app.get('/board/:id', boardController.getContent);
app.put('/board', boardController.addContent);
app.delete('/board/:id', boardController.deleteContent);

app.listen(3000, () => console.log('app listening on port 3000!'));
