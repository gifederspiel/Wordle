import {PrismaClient} from '@prisma/client';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import indexRouter from './routers/index.router';
import wordleGameRouter from './routers/wordleGame.router';
import addWordRouter from './routers/addWord.router';
import rulesRouter from './routers/rules.router'
import winRouter from './routers/won.router';
import instantwinRouter from './routers/instant.router';
import failRouter from './routers/fail.router'

const app = express();
const port: number = Number(process.env.PORT) || 3000;

//Body Parser einstellungen
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Folder "Public" für Frontend schicken
app.use(express.static(path.join(__dirname, '/public')));

//Viewengine setzen
app.set('view engine','ejs');

//View ordner deklarieren
app.set('views', path.join(__dirname, 'views'));

//Router
app.use('/', indexRouter);
app.use('/play', wordleGameRouter);
app.use('/pool', addWordRouter);
app.use('/rules', rulesRouter);
app.use('/won', winRouter);
app.use('/instantwin', instantwinRouter);
app.use('/fail', failRouter)

app.listen(port, () => {
    console.log(`Wordle listening on port ${port}`);
})