angular.module('app')
    .service('QuizzService', function($http) {
        const CATEGORY_CODES = {
            general: 9,
            sport: 21,
            music: 12,
            science: 17,
            history: 23,
            geography: 22,
            television: 14,
            animal: 27
        };
        return {
            get: function(category) {
                return $http.get('https://opentdb.com/api.php?amount=1&category=' + CATEGORY_CODES[category]);
            },
        };
    });
