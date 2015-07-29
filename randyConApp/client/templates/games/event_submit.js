Template.eventSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var events = {
      title: $(e.target).find('[name=title]').val(),
      day: $(e.target).find('[name=day]').val(),
      url: $(e.target).find('[name=url]').val()
      
    };

    Meteor.call('eventInsert', events, function(error, result) {
      //display the error to the user and abort
      if(error)
        return alert(error.reason);

      //show this result but route anyway
      if (result.eventExists)
        alert('This link has already been posted');

      Router.go('eventPage', {_id: result._id});

    });
    // post._id = Posts.insert(post);
    // Router.go('postPage', post);
  }
});
