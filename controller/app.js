const Twitter = require("twitter");
const config = require("../config/config");
const tweets = new Twitter(config);
const PAGE_SIZE = 10;

async function getTweet(req, res) {
  try {
    const { searchCondition, count, page = 1 } = req.query;
    const next_cursor = PAGE_SIZE * (page - 1);    // 10 tweets per page
    const params = {
      q: searchCondition.toString(),
      count: count,
      next_cursor: next_cursor || 0,
    };
    tweets.get("search/tweets", params, (err, data) => {
      if (err) throw err;
      const pageCount = data.statuses.length;  //for pagination pageNumber display
      return res.status(200).json({
        code: 200,
        pageCount,
        data: data,
      });
    });
  } catch (e) {
    return res.status(200).json({
      code: 400,
    });
  }
}

module.exports = {
  getTweet,
};
