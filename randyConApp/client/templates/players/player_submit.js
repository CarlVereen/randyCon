Template.playerSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var players = {
      playername: $(e.target).find('[name=playername]').val(),
      // friday: $(e.target).find('[name=friday]').val(),
      // saturday: $(e.target).find('[name=saturday]').val(),
      // sunday: $(e.target).find('[name=sunday]').val(),
      comments: $(e.target).find('[name=specialcomments]').val()
    };

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
