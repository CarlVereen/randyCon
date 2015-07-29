Router.configure({
  layoutTemplate: 'layout',
  loadTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('events'); }
});
//Home page
Router.route('/', {name: 'main'});
//Event submission pages and display pages
Router.route('/eventslist', {name: 'eventsList', data: function() { return Events.findOne(this.params._id); }});
Router.route('/event/:_id', { name: 'eventPage', data: function() { return Events.findOne(this.params._id); }});
Router.route('/event/:_id/edit', {name: 'eventEdit', data: function() {return Events.findOne(this.params._id); }});
Router.route('/submit', {name: 'eventSubmit'});
//Player signup payges and display pages
Router.route('/playerslist', {name: 'playersList', data: function() { return Players.findOne(this.params._id); }});
Router.route('/player/:_id', { name: 'playerPage', data: function() { return Players.findOne(this.params._id); }});
Router.route('/player/:_id/playeredit', {name: 'playerEdit', data: function() {return Players.findOne(this.params._id); }});

Router.route('/playersubmit', {name: 'playerSubmit'});


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

Router.onBeforeAction('dataNotFound', {only: 'eventPage'});
Router.onBeforeAction(requireLogin, {only: 'eventSubmit'});
