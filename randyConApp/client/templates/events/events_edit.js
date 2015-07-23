Template.eventsEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentEventId = this._id;


    var eventsProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    Events.update(currentEventId, {$set: eventsProperties}, function(error) {
      if(error) {
        // display the error to the user
        alert(error.reason);
      }else {
        Router.go('eventsPage', {_id: currentEventId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if(confirm('Delete this Post?')) {
      var currentEventId = this._id;
      Posts.remove(currentEventId);
      Router.go('eventsList');
    }
  }
});
