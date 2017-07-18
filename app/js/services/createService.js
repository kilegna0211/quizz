angular.module('app')
    .service('CreateService', function($http) {
        return {
            getAll: function() {
                return $http.get('/pubs');
            },
            getOne: function(id) {
                return $http.get('/pubs/id/' + id);
            },
            update: function(id, pub) {
                return $http.put('/pubs/' + id, pub);
            },
            delete: function(id) {
                return $http.delete('/pubs/' + id);
            },
            create: function(pub) {
                return $http.post('/pubs/newpub', pub);
            },

        };
    });
