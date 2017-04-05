angular.module('app')
    .controller('leaderController', function($scope, UserService) {
        $scope.leaders = [];
        UserService.getLeader().then(function(res) {
            $scope.leaders = res.data;
        });
    }); //end controller
