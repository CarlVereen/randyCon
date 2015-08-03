
Template.eventsList.helpers({
  events: function() {
  return Events.find({}, {sort: {gameTitle: 1}});
  }
});

Template.eventsList.events({
  'click .btn': function () {
    // Router.go('/submit');

    var events = $('.newGame').serializeJSON();
    console.log(events);
    $("input[type=text], textarea").val("");
    Meteor.call('eventInsert', events, function(error, result) {
      //display the error to the user and abort
      if(error)
        return alert(error.reason);

      //show this result but route anyway
      if (result.eventExists)
        alert('This game has already been posted');



    });
  }
});
