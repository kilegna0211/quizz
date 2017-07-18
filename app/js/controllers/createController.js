angular.module('app')
    .controller('CreateController', function($scope, $state, CurrentUser, CreateService, LocalService) {
        $(document).ready(function() {
            $('select').material_select();
        });

        $scope.validate = true;
        if ($scope.pubForm.$valid) {
            var pub = {
                name: $scope.name,
                categorie: $scope.typePub,
                author: CurrentUser.user()._id,
                place_url: '',
            };
            CreateService.create(pub).then(function(res) {
                LocalService.set('pubId', res.data.pub._id);
            }).then(function() {
                $state.go('user.description');
            });
        }

    });
