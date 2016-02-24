angular.module('studyMate')

<<<<<<< HEAD
.controller('eventsListCtrl', function($scope, $window, $state, eventsListFact, logFact) {
  $scope.data = [];
  $scope.allGuestLists = {};

  $scope.signout = function() {
    logFact.signout();
  };

  $scope.upcomingEvents = function(obj) {
    var date = new Date();
    var eventDate = new Date(obj.datetime);
    return eventDate >= date;
  };

  $scope.displayEvent = function() {
    eventsListFact.getEvents()
      .then(function(data) {
        data.forEach(function(value) {
          value.formatted = moment(value.datetime, moment.ISO_8601).utcOffset(480).format('MMM Do YYYY, h:mm A');
        });
        $scope.data = data;
      }).catch(function(err) {
        console.log(err);
      });
  };

  $scope.eventJoin = function(event) {

    var token = $window.localStorage.getItem('com.studymate');

    var eventJoinData = {
      token: token,
      event: event
    };

    eventsListFact.eventJoin(eventJoinData)
      .then(function(response) {
        if (response.isValid) {
          $scope.getGuestList(event);
        } else {
          console.log('Event join failed');
        }
      });
      $state.reload();
  };

  $scope.getGuestList = function(event) {
    var list = [];
    eventsListFact.getGuestList(event.id)
      .then(function(data) {
        data.forEach(function(item) {
          list.push(item.username);
        });
        $scope.allGuestLists[event.id] = list;
      })
  }

  $scope.displayEvent();
=======
.controller('eventsListCtrl',function($scope, eventsListFact){
  var self = this;

  self.displayEvent = function(){
    eventsListFact.getEvents()
    .then(function(data){
      self.data = data;
      console.log(self.data);
    }).catch(function(err) {
      console.log(err);
    });
  };

  self.displayEvent();
>>>>>>> master

});
