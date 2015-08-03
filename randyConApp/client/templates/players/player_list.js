

Template.playersList.helpers({
  players: function() {
  return Players.find({}, {sort: {submitted: -1}});
},
  data: function() {
    var dataId = Players.findOne(this.params._id);
    console.log(dataId);
    return dataId;
  }
});

Template.playersList.events({
  'click .register': function () {
    var players = $('.newPlayer').serializeJSON();
    $("input[type=text], textarea").val("");
    Meteor.call('playerInsert', players, function(error, result) {
      //display the error to the user and abort
      if(error)
        return alert(error.reason);

      //show this result but route anyway
      if (result.eventExists)
        alert('This game has already been posted');



    });
  }
});
