
Template.playerItem.helpers({
  ownPlayer: function() {
    return this.userId === Meteor.userId();
  },
  data: function() {
    var dataId = Players.findOne(this.params._id);
    console.log(dataId);
    return dataId;
  }
  // domain: function() {
  //   var a = document.createElement('a');
  //   a.href = this.url;
  //   return a.hostname;
  // }
});
