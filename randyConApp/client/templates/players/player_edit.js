Template.playerEdit.helpers({
  events: function() {
  return Events.find({}, {sort: {submitted: -1}});
},

elementToReturn: function() {
    var elementToReturn = [];
    var someDoc = CollectionWithUnknowFields.findOne({});
    var index = 0;
    _(someDoc).each( function( value, key, someDoc ) {
        elementToReturn[index] = {};
        elementToReturn[index]['value'] = value;
        elementToReturn[index]['key'] = key;
        index++;
    });
    return elementToReturn;
}

  // selected: function(title){
  //   var gameTitles = Players.find({}, {fields: {title: 1}});
  //   var gTitles = [];
  //   var result = jQuery.inArray(title, gTitles);
  //   if(result !== -1) {
  //     return true;
  //   }
  //   else
  //   gameTitles.forEach(function(game) {
  //     gTitles.push(game.title);
  //     console.log(gTitles);
  //   });
  // }

});

Template.playerEdit.events({
  'submit form': function(e) {
    var playerProperties = $('#form').serializeJSON();
    e.preventDefault();

    var currentPlayerId = this._id;


    // var playerProperties = {
    //   url: $(e.target).find('[name=url]').val(),
    //   title: $(e.target).find('[name=title]').val()
    // };

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

// Template.playerEdit.onRendered({
//   selected: function() {
//     //grab the game element, check for id selected in player db, mark as checked
//     jQuery.each(gamesSelected, function(i, val) {
//       var selectedGames = {Events.find({val}, {sort: {submitted: -1}})};
//     })
//
//
//   }
// })
