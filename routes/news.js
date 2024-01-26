const express = require('express');
const router = express.Router();
const path = require('path');

// '/news' のGETリクエストに対するルート
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/news.html'));
});

module.exports = router;
