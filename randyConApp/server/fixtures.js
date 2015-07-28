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
