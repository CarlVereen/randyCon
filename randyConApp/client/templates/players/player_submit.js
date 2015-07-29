Template.playerSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var players = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
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
