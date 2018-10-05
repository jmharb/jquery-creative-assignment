const express = require('express');
const axios = require('axios');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/restaurants', (req, res, next) => {
  const { lat, long } = req.body;
  const url = `https://api.yelp.com/v3/businesses/search?latitude=${lat}&longitude=${long}&radius=8046`;
  const API_KEY = 'tCeMwDFdgvQGdPzyw-ywWfZdm8cniioL84F5WxA_XExa1m38B7NTN2b3niF2jZkYgpzBQA-zQx9IBng29N8d-JDsKv9th4R0oaaFDlp5CX3gALXzJxxUMp12NKK2W3Yx';
  axios.get(url, {
    headers: {
      authorization: `bearer ${API_KEY}`
    }
  }).then(response => {
    res.json(response.data);
  })
});

module.exports = router;
