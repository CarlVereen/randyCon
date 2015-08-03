Template.eventItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});

Template.eventItem.events({
  'click .delete': function(e) {
    e.preventDefault();

    if(confirm('Delete this Post?')) {
      var currentEventId = this._id;
      Events.remove(currentEventId);
    }
  }

});
