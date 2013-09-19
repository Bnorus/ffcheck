var twitter = new Twitter();

Meteor.methods({
  publicTimeline: function () {
    twitter.publicTimeline("Firefall");
  }
});