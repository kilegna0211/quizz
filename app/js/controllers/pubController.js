angular.module('app')
    .controller('AgendaController', function($scope, CurrentUser, UserService, LocalService, pubService, $location) {
        UserService.getOne(CurrentUser.user()._id).then(function(res) {
            $scope.user = res.data;
        });
        pubService.getAll().then(function(res) {
            $scope.allpubs = res.data;
            $scope.pubs = [];

            function filter() {
                for (var i = 0; i < $scope.allpubs.length; i++) {
                    if ($scope.allpubs[i].private === false) {
                        $scope.pubs.push($scope.allpubs[i]);
                    }
                }
            }
            filter();
                $scope.moveTopub = function(value) {
                    $location.path('/user/pub/id/' + value);
                };
        });
    });
