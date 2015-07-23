Template.eventsSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var events = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    Meteor.call('eventsInsert', events, function(error, result) {
      //display the error to the user and abort
      if(error)
        return alert(error.reason);

      //show this result but route anyway
      if (result.eventsExsit)
        alert('This link has already been posted');

      Router.go('eventsPage', {_id: result._id});

    });
    // post._id = Posts.insert(post);
    // Router.go('postPage', post);
  }
});
