NetBeeTicketApp.controller('ntController',
    function ntController($scope, ntService) {
        $scope.customer = ntService.customer;

        $scope.subscriptionType = [
            "Monthly",
            "Quarterly",
            "Semi-Annual",
            "Annual"
        ];

        $scope.submitForm = function () {

        }

    });