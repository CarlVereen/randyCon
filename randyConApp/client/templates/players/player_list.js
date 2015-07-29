
Template.playersList.helpers({
  players: function() {
  return Players.find({}, {sort: {submitted: -1}});
  }
});

Template.playersList.events({
  'click .btn': function () {
    Router.go('/playersubmit');
  }
});
