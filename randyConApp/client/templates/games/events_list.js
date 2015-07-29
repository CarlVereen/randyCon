
Template.eventsList.helpers({
  events: function() {
  return Events.find({}, {sort: {submitted: -1}});
  }
});

Template.eventsList.events({
  'click .btn': function () {
    Router.go('/submit');
  }
});
