import express from 'express';
import cards from './model';
const router = express.Router();

router.get(/^\/advantage|\/event/, async (req, res) => {
  const params = req.query;
  const path = req.path.replace('/', '');
  console.log(path, params);
  try {
    let { ipp = 1, pg, sort } = params;
    ipp = +ipp;
    pg = +pg;
    let query = {};
    Object.keys(params).forEach(key => {
      if (['ipp', 'pg', 'sort'].indexOf(key) > -1) {
        return;
      }
      const tableKey = key.charAt(0).toUpperCase() + key.substr(1);
      query[tableKey] = params[key];
    })
    const results = await cards.get(path, {
      query,
      sort,
      ipp,
      pg
    });
    console.log(results);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(error.status).send(error.message);
  }
});

router.get(/^\/search(\/advantage|\/event)/, async (req, res) => {
  const params = req.query;
  const path = req.path.replace('/search/', '');
  let { keyword, field, sort, ipp, pg } = params;
  keyword = keyword.split(',');
  field = field.split(',');
  ipp = +ipp;
  pg = +pg;
  let query = {};
  field.forEach((element, index) => {
    query[element] = {
      $regex: keyword[index],
      $options: 'i'
    }
  });
  try {
    res.json(await cards.search(path, {
      query,
      sort,
      ipp,
      pg
    }));
  } catch (error) {
    console.log(error);
    res.status(error.status).send(error.message);
  }
});

export default router;