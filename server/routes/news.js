const express = require('express');

const router = express.Router();
const newsController = require('../controllers/news-controller');

// sends array of user objects when request to /users endpoint is received
router.get('/', newsController.getTopNews, (req, res) => {
  // send json of array of top news objects
//   console.log('sending array of top news');
  res.status(200).json(res.locals.topNews);
});

router.get('/:id', newsController.getArticleURL, (req, res) => {
    // console.log('sending article url')
    res.status(200).json(res.locals.articleURL);
})

// redirect to user router
// app.use('/:username', userRouter);

module.exports = router;
