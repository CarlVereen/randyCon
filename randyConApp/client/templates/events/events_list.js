
Template.eventsList.helpers({
  posts: function() {
  return Events.find({}, {sort: {submitted: -1}});
  }
});
