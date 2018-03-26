import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import CardsConroller from './cards/router';
import { init } from './db';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  next();
});

app.use('/card', CardsConroller);

const startServer = async () => {
  try {
    await init();
    app.listen(config.express.port, config.express.ip, () => {
      console.log(`Listening to app at ${config.express.ip}:${config.express.port}`);
    })
    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

startServer();
