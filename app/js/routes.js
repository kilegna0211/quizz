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
            .state('user.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'user/home.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('user.leaderboard', {
                url: '/leaderboard',
                views: {
                    'content@': {
                        templateUrl: 'user/leaderboard.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('user.quizzScience', {
                url: '/quizzScience',
                views: {
                    'content@': {
                        templateUrl: 'user/quizzScience.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('user.quizzMusic', {
                url: '/quizzMusic',
                views: {
                    'content@': {
                        templateUrl: 'user/quizzMusic.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('user.quizzTele', {
                url: '/quizzTele',
                views: {
                    'content@': {
                        templateUrl: 'user/quizzTele.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('user.quizzAnimal', {
                url: '/quizzAnimal',
                views: {
                    'content@': {
                        templateUrl: 'user/quizzAnimal.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('user.quizzGeography', {
                url: '/quizzGeography',
                views: {
                    'content@': {
                        templateUrl: 'user/quizzGeography.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('user.quizzSport', {
                url: '/quizzSport',
                views: {
                    'content@': {
                        templateUrl: 'user/quizzSport.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('user.quizzHistory', {
                url: '/quizzHistory',
                views: {
                    'content@': {
                        templateUrl: 'user/quizzHistory.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('user.quizzGeneral', {
                url: '/quizzGeneral',
                views: {
                    'content@': {
                        templateUrl: 'user/quizzGeneral.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('user.gameprofile', {
                url: '/gameprofile',
                views: {
                    'content@': {
                        templateUrl: 'user/gameprofile.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('user.dashboard', {
                url: '/dashboard',
                views: {
                    'content@': {
                        templateUrl: 'user/dashboard.html',
                        controller: 'DashboardController'
                    }
                }
            })
            .state('user.profile', {
                url: '/profile',
                views: {
                    'content@': {
                        templateUrl: 'user/profile.html',
                        controller: 'ProfileController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
