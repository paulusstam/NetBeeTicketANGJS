var NetBeeTicketApp = angular.module('NetBeeTicketApp', ["ngRoute"]);

NetBeeTicketApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "App/home.html",
            controller: "HomeController"
        })
        .when("/newCustomerForm", {
            templateUrl: "App/CustomerForm/ntTemplate.html",
            controller: "ntController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});

NetBeeTicketApp.controller("HomeController",
    function ($scope, $location, DataService) {

        $scope.addNewCustomer = function () {
            $location.path('/newCustomerForm');

        }

    });