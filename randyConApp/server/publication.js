Meteor.publish('events', function() {
  return [
    Events.find({}, {gameTitle: -1}),
    Players.find()
  ];
});
// Meteor.publish('players', function() {
//   return Players.find();
// });
