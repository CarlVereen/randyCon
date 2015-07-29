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
    playername: 'Carl',
    comments: 'http://sachagreif.com/introducing-telescope/'
  });

  Players.insert({
    playername: 'Skipper',
    comments: 'http://meteor.com'
  });

  Players.insert({
    playername: 'Joel',
    comments: 'http://themeteorbook.com'
  });
}
