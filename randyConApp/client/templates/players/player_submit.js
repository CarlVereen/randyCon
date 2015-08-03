gamesSelected = ['dominion', 'Carl'];

Template.playerSubmit.helpers({
  events: function() {
  return Events.find({}, {sort: {submitted: -1}});
},


});

Template.playerSubmit.events({
  // 'click .btn': function(event) {
  //   var elementId = event.currentTarget.id;
  //   var buttonId = '#' + elementId;
  //   console.log(buttonId);
  //   if($(buttonId).hasClass('selected')) {
  //     $(buttonId).removeClass('selected');
  //   }
  //   else {
  //       $(buttonId).addClass('selected');
  //   }
  //   if(jQuery.inArray(elementId, gamesSelected) === -1) {
  //     gamesSelected.push(elementId);
  //   }
  //   console.log(gamesSelected);
  //   selected();
  //
  // },

  'submit form': function(e) {
    var players = $('#form').serializeJSON();
    var gamesSelected = $(".gameInfo").serializeJSON();
    gTitles = [];
    // gamesSelected.forEach(function(game) {
    //     gTitles.push(game.title);
    //     console.log(gTitles);
    //   });
    console.log(players);
    console.log(gamesSelected);
    e.preventDefault();


    Meteor.call('playerInsert', players, function(error, result) {
      //display the error to the user and abort
      if(error)
        return alert(error.reason);

      //show this result but route anyway
      if (result.playerExists)
        alert('This player has already been created');

      Router.go('playerPage', {_id: result._id});

    });
    // post._id = Posts.insert(post);
    // Router.go('postPage', post);
  }
});
