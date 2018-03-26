import { getDb } from '../db';

const model = {};

export const get = model.get = (path, options) => {
  const { query, sort, ipp, pg } = options;

  let aggrPipeline = [];
  if (query.size) {
    aggrPipeline.push({ $match: query });
  }
  if (!sort) {
    aggrPipeline.push({ $sample: { size: ipp } });
  }
  console.log(aggrPipeline);

  try {
    const db = getDb();
    return db.collection(`${path}_cards`).aggregate(aggrPipeline).toArray();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const search = model.search = (path, options) => {
  const { query, sort, ipp, pg } = options;
  try {
    const db = getDb();
    const collection = db.collection(`${path}_cards`);
    return collection.find(query).toArray();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default model;