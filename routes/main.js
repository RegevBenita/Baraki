const express = require('express');
const router = express.Router();

const Article = require('../models/article');

// Register
router.get('', (req, res, next) => {
  res.send('Hello Mambo dambo');
});

router.post('', (req, res, next) => {
  let newArticle = new Article({
    title: req.body.title,
    body: req.body.body
  });

  Article.addArticle(newArticle, (err, article) => {
    if(err){
      res.json({success: false,
                msg:'Fail to import article'});
    } else {
      res.json({success: true,
                msg:'Article imported'});
    }
  });
});

module.exports = router;
