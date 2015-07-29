Players = new Mongo.Collection('players');

Meteor.methods({
  playerInsert: function(playerAttributes) {
    check(Meteor.userId(), String);
    // check(playerAttributes, {
    //   playername: String,
    //   comments: String,
    // });

    // var playerWithSameName = Players.findOne({playername: playerAttributes.playername});
    // if(playerWithSameName) {
    //   return {
    //     playerExists: true,
    //     _id: playerWithSameName._id
    //   };
    // }

    var user = Meteor.user();
    var player = _.extend(playerAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var playerId = Players.insert(player);
    return {
      _id: playerId
    };
  }
});
