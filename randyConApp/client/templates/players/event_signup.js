Template.eventSignup.helpers({
  gameSignup: function() {
    var currentPlayer = this._id;
    var gameTitles = Players.findOne(currentPlayer);
    var gTitles = [];
    gameTitles.forEach(function(game) {
        gTitles.push(game.title);
        console.log(gTitles);
      });
  }
});
