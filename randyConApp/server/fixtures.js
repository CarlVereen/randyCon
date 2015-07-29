if (Events.find().count() === 0) {
  Events.insert({
    title: 'Viceroy',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Events.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Events.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}
if (Players.find().count() === 0) {
  Players.insert({
    title: 'Carl',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Players.insert({
    title: 'Skipper',
    url: 'http://meteor.com'
  });

  Players.insert({
    title: 'Joel',
    url: 'http://themeteorbook.com'
  });
}
