Template.eventEdit.events({
  'click .btn': function(e) {
    e.preventDefault();

    var currentEventId = this._id;


    var eventProperties = $('.newGame').serializeJSON();
      eventProperties.numPlayers = Number(eventProperties.numPlayers);
      eventProperties.playersRemain = eventProperties.numPlayers;

    Events.update(currentEventId, {$set: eventProperties}, function(error) {
      if(error) {
        // display the error to the user
        alert(error.reason);
      }else {
        Router.go('eventPage', {_id: currentEventId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if(confirm('Delete this Post?')) {
      var currentEventId = this._id;
      Events.remove(currentEventId);
      Router.go('eventsList');
    }
  }
});
