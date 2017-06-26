var NetBeeTicketApp = angular.module('NetBeeTicketApp', ['ngRoute', 'ui.bootstrap']);

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
        .when("/updateCustomerForm/:id", {
            templateUrl: "App/CustomerForm/ntTemplate.html",
            controller: "ntController"
        })
        .otherwise({
            redirectTo: "/home"
        });
});

NetBeeTicketApp.controller("HomeController",
    function ($scope, $location, $uibModal, DataService) {

        $scope.showCreateCustomerForm = function () {
            //$location.path('/newCustomerForm');
            $uibModal.open({
                templateUrl: "App/CustomerForm/ntTemplate.html",
                controller: "ntController"
            });
        };

        $scope.showUpdateCustomerForm = function (id) {
            $location.path('/updateCustomerForm/' + id);

        };

    });