Events = new Mongo.Collection('events');

Meteor.methods({
  eventInsert: function(eventAttributes) {
    check(Meteor.userId(), String);
    check(eventAttributes, {
      title: String,
      url: String,
    });

    var eventWithSameLink = Events.findOne({url: eventAttributes.url});
    if(eventWithSameLink) {
      return {
        eventExists: true,
        _id: eventWithSameLink._id
      };
    }

    var user = Meteor.user();
    var event = _.extend(eventAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var eventID = Events.insert(events);
    return {
      _id: eventId
    };
  }
});
