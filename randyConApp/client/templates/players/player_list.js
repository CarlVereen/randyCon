
Template.playersList.helpers({
  players: function() {
  return Players.find({}, {sort: {submitted: -1}});
  }
});
