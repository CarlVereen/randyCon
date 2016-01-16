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

function onSuccess(googleUser) {
      var sgnOut = document.getElementById("signLink");
      sgnOut.innerHTML = sgnOut.innerHTML('<a href="#" onclick="signOut();">Sign out</a>');
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    }
    function onFailure(error) {
      console.log(error);
    }
    function renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'https://www.googleapis.com/auth/plus.login',
        'width': 200,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }

    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
      }
