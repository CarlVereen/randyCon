Players = new Mongo.Collection('players');

Meteor.methods({
  playerInsert: function(playerAttributes) {
    check(Meteor.userId(), String);
    check(playerAttributes, {
      title: String,
      url: String,
    });

    var playerWithSameLink = Players.findOne({url: playerAttributes.url});
    if(playerWithSameLink) {
      return {
        playerExists: true,
        _id: playerWithSameLink._id
      };
    }

    var user = Meteor.user();
    var player = _.extend(playerAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var playerId = Players.insert(players);
    return {
      _id: playerId
    };
  }
});