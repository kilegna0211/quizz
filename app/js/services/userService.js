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
            getScore: function(id) {
                return $http.get('/users/score/' + id);
            },
            delete: function(id) {
                return $http.put('/users/' + id);
            }
        };
    });
