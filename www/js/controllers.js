angular.module('starter.controllers', ['ui.bootstrap.datetimepicker', 'angularMoment'])

.controller('selectMovieCtrl',
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
                      console.log($scope.data);
                      return $scope.data.movie;
                    }
                  }
              }
          ]
      });
    }
  }
)

.controller('buttons', function buttons($scope, $http, $ionicPopup) {
    $scope.cancelButton = function () {
      console.log('cancel');
      $scope.data.movie = null;
      $scope.data.date = null;
    };
    $scope.submitButton = function () {
      if($scope.data.movie && $scope.data.date) {
        console.log($scope.data);
        console.log('is this even working??');
        $http.post('/movie/countdown.json', $scope.data)
          .then(function () {
            console.log('Success!')
          });
      } else {
        console.log('add a popup to let peeps know what\'s missing');
      }
    }
  }
);
