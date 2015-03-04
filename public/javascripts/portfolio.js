var titlePrefix = "Matías Sanchez";
var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

portfolioApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'templates/home.html',
            controller  : 'mainController'
        })

        .when('/about', {
            templateUrl : 'templates/about.html',
            controller  : 'aboutController'
        })

        .when('/contact', {
            templateUrl : 'templates/contact.html',
            controller  : 'contactController'
        });

});

portfolioApp.controller('mainController', function($scope) {
    // just for init
});

portfolioApp.controller('headerController', function($scope, $location, $anchorScroll) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    }
});