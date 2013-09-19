Template.twitterAccount.recentTweets = function() {
  return Session.get("publicTimeline") || [];
}