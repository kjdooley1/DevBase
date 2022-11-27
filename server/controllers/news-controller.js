const axios = require('axios');

const newsController = {};

newsController.getTopNews = async (req, res, next) => {
  try {
    const topNewsArr = await axios('https://hacker-news.firebaseio.com/v0/newstories.json');
    res.locals.topNews = topNewsArr.data;
    return next();
  }
  catch (err) {
    return next({ err })
  }
};

newsController.getArticleURL = async (req, res, next) => {
    const { id } = req.params;
    try {
      const articleObj = await axios(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
    //   console.log('articleObj: ', articleObj);
      res.locals.articleURL = articleObj.data.url;
    //   console.log('res locals: ', res.locals.articleURL)
      return next();
    }
    catch (err) {
      return next({ err })
    }
  };

module.exports = newsController;