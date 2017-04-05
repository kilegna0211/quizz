angular.module('app')
    .controller('GameProfileController', function($scope, UserService, CurrentUser) {

var userId = CurrentUser.user()._id;

$scope.myscore = 0;


            $scope.newProfile = {
                username: '',
                lastname: '',
                password: '',
                email: ''
            };


            $scope.saveUser = function() {
              console.log($scope.newProfile);
                UserService.updateProfile(userId, $scope.newProfile).then(function(res) {
                    // good
                }, function(err) {
                    // bad
                });
            };

            $scope.leaders = [];
            UserService.getLeader().then(function(res) {
                $scope.leaders = res.data;
            });

            UserService.getScore(userId).then(function(res) {
                  $scope.myScore = res.data.score;
              });

              var updateScore = function(point) {
                // TODO: Attention pensez à remplacer "58de229a3eda8b0bcaceaf0c" par user._id lorsque le quizz ne pourra se faire sous connexion
                UserService.updateScore(userId, point).then(function(res) {

                }, function(err) {

                });
            };

          }); //end controller
