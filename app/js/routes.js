angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, AccessLevels) {
        $stateProvider
            .state('anon', {
                abstract: true,
                data: {
                    access: AccessLevels.anon
                },
                views: {
                    'navbar@': {
                        templateUrl: 'anon/navbar.html',
                        controller: 'NavbarController'
                    }
                }
            })
            .state('anon.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'anon/home.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('anon.login', {
                url: '/login',
                views: {
                    'content@': {
                        templateUrl: 'anon/login.html',
                        controller: 'LoginController'
                    }
                }
            })
            .state('anon.register', {
                url: '/register',
                views: {
                    'content@': {
                        templateUrl: 'anon/register.html',
                        controller: 'RegisterController'
                    }
                }
            });
        $stateProvider
            .state('user', {
                abstract: true,
                url: '/user',
                views: {
                    'navbar@': {
                        templateUrl: 'user/navbar.html',
                        controller: 'NavbarController'
                    }
                },
                data: {
                    access: AccessLevels.user
                }
            })
            .state('user.pub', {
                url: '/pub',
                views: {
                    'content@': {
                        templateUrl: 'user/pub.html',
                        controller: 'PubController'
                    }
                }
            })

            .state('user.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'user/home.html',
                        controller: 'MainController'
                    }
                }
            })

            .state('user.createads', {
                url: '/createads',
                views: {
                    'content@': {
                        templateUrl: 'user/createads.html',
                        controller: 'CreateController'
                    }
                }
            });


        $urlRouterProvider.otherwise('/');
    });
