NetBeeTicketApp.controller('ntController',
    function ntController($scope, ntService) {
        $scope.customer = ntService.customer;
    });