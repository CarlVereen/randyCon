Template.eventItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },
  'playerList': function() {
      var currentEventId = this._id;
      var playerNames = Events.findOne({_id: currentEventId}).players;
      var str = "";
      if(playerNames){
        jQuery.each(playerNames, function (i, name) {
        // console.log('posted');
        // console.log(name);
      });
      return playerNames;
    } else {
      console.log('nothing');
    }

  },
  // playersRemain: function() {
  //   var currentEventId = this._id;
  //   var currentPlayersAvail = Events.findOne({_id: currentEventId}).playersRemain;
  //   console.log(currentPlayersAvail);
  //
  // }
});

Template.eventItem.events({
  'click .delete': function(e) {
    e.preventDefault();

    if(confirm('Delete this Post?')) {
      var currentEventId = this._id;
      Events.remove(currentEventId);
    }
  },
  'click .signup': function(e) {
    e.preventDefault();
    var currentEventId = this._id;
    var currentPlayersAvail = Events.findOne({_id: currentEventId}).playersRemain;
    var currentUser = Meteor.user().username;
    console.log(currentPlayersAvail);
    console.log(currentUser);
    if(currentPlayersAvail > 0) {
      console.log('Signed Up');
      Events.update(currentEventId, {$addToSet: {players: currentUser}});
      Events.update(currentEventId, {$inc: {playersRemain: -1}});
      currentPlayersAvail = Events.findOne({_id: currentEventId}).playersRemain;

      console.log(currentPlayersAvail);


    } else {
      alert('All Available slots taken');
    }

    // if(confirm('Register for this game?')) {
    //
    //   var currentUser = Meteor.user();
    //   Events.update(currentEventId, {$addToSet: {players: currentUser}});
    // }
  }

});
