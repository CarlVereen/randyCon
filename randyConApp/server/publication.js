Meteor.publish('events', function() {
  return [
    Events.find(),
    Players.find()
  ];
});
// Meteor.publish('players', function() {
//   return Players.find();
// });
