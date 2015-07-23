Router.configure({
  layoutTemplate: 'layout',
  loadTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('events'); }
});

Router.route('/', {name: 'eventsList'});

Router.route('/events/:_id', { name: 'eventsPage', data: function() { return Events.findOne(this.params._id); }});
Router.route('/events/:_id/edit', {name: 'eventsEdit', data: function() {return Events.findOne(this.params._id); }});

Router.route('/submit', {name: 'eventsSubmit'});

var requireLogin = function() {
  if(! Meteor.user()) {
    if(Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  }else {
    this.next();
  }
};

Router.onBeforeAction('dataNotFound', {only: 'eventsPage'});
Router.onBeforeAction(requireLogin, {only: 'eventsSubmit'});
