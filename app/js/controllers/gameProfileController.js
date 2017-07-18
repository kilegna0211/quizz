angular.module('app')
    .controller('GameProfileController', function($scope, UserService, CurrentUser, LocalService) {
    var userId = CurrentUser.user()._id;

    var updateScore = function(point) {
        // TODO: Attention pensez à remplacer "58de229a3eda8b0bcaceaf0c" par user._id lorsque le quizz ne pourra se faire sous connexion
        UserService.updateScore(userId, point).then(function(res) {

        }, function(err) {

        });
    };


    $scope.leaders = [];
    $scope.myUsername = '';
    $scope.myEmail = '';


    $scope.newProfile = {
        username: CurrentUser.user().username,
        email: CurrentUser.user().email
    };


    $scope.saveUser = function() {
        console.log($scope.newProfile);
        UserService.updateProfile(userId, $scope.newProfile).then(function(res) {
            var newUser = CurrentUser.user();
            newUser.username = $scope.newProfile.username;
            newUser.email = $scope.newProfile.email;
            LocalService.set('user', JSON.stringify(newUser));
            location.reload(true);
        }, function(err) {
            // bad
        });
    };

    UserService.getUsername(userId).then(function(res) {
        $scope.myUsername = res.data.username;
    });

    UserService.getEmail(userId).then(function(res) {
        $scope.myEmail = res.data.email;
    });

    UserService.getLeader().then(function(res) {
        $scope.leaders = res.data;
    });

    UserService.getScore(userId).then(function(res) {
        $scope.myScore = res.data.score;
    });


}); //end controller
