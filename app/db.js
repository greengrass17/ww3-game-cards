import { MongoClient } from 'mongodb';
import config from './config';

let db;

export const init = async () => {
  try {
    db = await MongoClient.connect(config.mongodb.url);
    console.log('Connected to db');
    return db;
  } catch (err) {
    console.log('Cannot connect to db');
    console.log(err);
    throw err;
  }
};

export const getDb = () => {
  return db;
};