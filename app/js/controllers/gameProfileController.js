angular.module('app')
    .controller('GameProfileController', function($scope, UserService, CurrentUser, LocalService) {
    var userId = CurrentUser.user()._id;

<<<<<<< HEAD
        var userId = CurrentUser.user()._id;

        $scope.myscore = 0;
        $scope.leaders = [];
        $scope.myUsername = '';
        $scope.myEmail = '';
=======
    $scope.myscore = 0;
    $scope.leaders = [];
    $scope.myUsername = '';
    $scope.myEmail = '';

>>>>>>> 52c507cfb219dcaca9c856e1b6d58da7af87ac68

    $scope.newProfile = {
        username: CurrentUser.user().username,
        email: CurrentUser.user().email
    };

<<<<<<< HEAD
        $scope.newProfile = {
            username: '',
            lastname: '',
            password: '',
            email: ''
        };
=======
>>>>>>> 52c507cfb219dcaca9c856e1b6d58da7af87ac68

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

<<<<<<< HEAD
        $scope.saveUser = function() {
            console.log($scope.newProfile);
            UserService.updateProfile(userId, $scope.newProfile).then(function(res) {
                // good
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

        var updateScore = function(point) {
            // TODO: Attention pensez à remplacer "58de229a3eda8b0bcaceaf0c" par user._id lorsque le quizz ne pourra se faire sous connexion
            UserService.updateScore(userId, point).then(function(res) {

            }, function(err) {

            });
        };

    }); //end controller
=======
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

    var updateScore = function(point) {
        // TODO: Attention pensez à remplacer "58de229a3eda8b0bcaceaf0c" par user._id lorsque le quizz ne pourra se faire sous connexion
        UserService.updateScore(userId, point).then(function(res) {

        }, function(err) {

        });
    };

}); //end controller
>>>>>>> 52c507cfb219dcaca9c856e1b6d58da7af87ac68
