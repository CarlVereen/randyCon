// Set global trip variable and viewModel for knockout
var viewModel;

//create the model for knockout
function MyViewModel() {
    var self = this;

    self.username = ko.observable();
    self.useremail = ko.observable();
    self.userpassword = ko.observable();
    self.userpasswordvalidate = ko.observable();

//create model for event listings
    var Event = function(gameTitle) {
      this.gameTitle = ko.observable(gameTitle);
    };


}


viewModel = new MyViewModel();
ko.applyBindings(viewModel);
