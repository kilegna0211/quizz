angular.module('app')
    .service('UserService', function($http) {
        return {
            getAll: function() {
                return $http.get('/users');
            },
            getOne: function(id) {
                return $http.get('/users/' + id);
            },
            update: function(id, user) {
                return $http.put('/users/' + id, user);
            },
            updateScore: function(id, scoreValue) {
                return $http.put('/users/score/' + id, { score: scoreValue });
            },
            updateProfile: function(id, user) {
                return $http.put('/users/profile/'+id, user);
            },
            getScore: function(id) {
                return $http.get('/users/score/' + id);
            },
            getLeader: function() {
                return $http.get('/users/leaders');
            },
            delete: function(id) {
                return $http.put('/users/' + id);
            }
        };
    });
