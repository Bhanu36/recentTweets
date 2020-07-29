const Twitter = require('twitter');
const config = require('./config.js');
const tweets = new Twitter(config);

const params = {
  q: '#nodejs',   //twitter handle
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

tweets.get('search/tweets', params, (err, data, response) => {
  if(err){
    return console.log(err);
  }
  const tweetsId = data.statuses
    .map(tweet => ({ id: tweet.id_str }));

  tweetsId.map(tweetId => {
    tweets.post('favorites/create', tweetId, (err, response) => {
      if(err){
        return console.log(err);
      }
      console.log(response)
      const username = response.user.screen_name;
      const favoritedTweetId = response.id_str;
      console.log(`Favorited: https://twitter.com/${username}/status/${favoritedTweetId}`);

    });
  });
})
