Template.playerEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPlayerId = this._id;


    var playerProperties = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    }

    Players.update(currentPlayerId, {$set: playerProperties}, function(error) {
      if(error) {
        // display the error to the user
        alert(error.reason);
      }else {
        Router.go('playerPage', {_id: currentPlayerId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if(confirm('Delete this Player?')) {
      var currentPlayerId = this._id;
      Players.remove(currentPlayerId);
      Router.go('playersList');
    }
  }
});
