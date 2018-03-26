import 'babel-polyfill';
import fs from 'fs-extra';
import path from 'path';
import { init } from './app/db';
import camelToUnderscore from './app/utils/camelToUnderscore';

const startServer = async () => {
  try {
    const db = await init();
    updateCards(db);
    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateCards = (db) => {
  ['AdvantageCards', 'EventCards'].forEach(dataName => updateCard(dataName, db));
}

const updateCard = async (dataName, db) => {
  const collectionName = camelToUnderscore(dataName);
  const collection = db.collection(collectionName);
  const data = fs.readJsonSync(path.resolve(__dirname, `static/${collectionName}.json`), 'utf8');
  try {
    await collection.remove({});
  } catch (error) {
    console.log(error);
    throw error;
  }

  try {
    const { insertedCount } = await collection.insertMany(data[dataName]);
    console.log('Number of cards added: ' + insertedCount);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

startServer();