Template.eventPage.helpers({
  'playerList': function() {
      var currentEventId = this._id;
      var playerNames = Events.findOne({_id: currentEventId}).players;
      var str = "";
      jQuery.each(playerNames, function (i, name) {
        // console.log('posted');
        // console.log(name);


      });
      return playerNames;
  },
  ownPost: function() {
    return this.userId === Meteor.userId();

  },
});

Template.eventPage.events({


  'click .delete': function(e) {
    e.preventDefault();

    if(confirm('Delete this Post?')) {
      var currentEventId = this._id;
      Events.remove(currentEventId);
      Router.go('eventsList');
    }
  }
});
