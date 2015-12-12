// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ui.bootstrap.datetimepicker'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('selectMovieCtrl',
function getString($scope, $ionicPopup) {
  $scope.data = {};
  $scope.getMovieTitle = function () {
      var myPopup = $ionicPopup.show({
          template: '<input type="text" ng-model="data.movie">',
          title: 'What movie would you like to watch?',
          scope: $scope,
          buttons: [
              { text: 'Cancel' },
              {
                  text: 'Submit',
                  type: 'button-positive',
                  onTap: function(e) {
                    console.log(e);
                    if(!$scope.data.movie) {
                      e.preventDefault();
                    } else {
                      console.log($scope.data.movie)
                      console.log($scope.data);
                      return $scope.data.movie;
                    }
                  }
              }
          ]
      });
    }
  $scope.getDateString = function () {
      var myPopup = $ionicPopup.show({
          template: '<datetimepicker ng-model="data.date"></datetimepicker>',
          title: 'When would you like to watch it?',
          scope: $scope,
          buttons: [
              { text: 'Cancel' },
              {
                  text: 'Submit',
                  type: 'button-positive',
                  onTap: function(e) {
                    console.log(e);
                    if(!$scope.data.date) {
                      e.preventDefault();
                    } else {
                      console.log($scope.data.date)
                      console.log($scope.data);
                      return $scope.data.movie;
                    }
                  }
              }
          ]
      });
    }
  }
);
