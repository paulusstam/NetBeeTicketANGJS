NetBeeTicketApp.controller('ntController',
    function ntController($scope, DataService) {
        $scope.customer = DataService.customer;

        $scope.subscriptionType = [
            "Monthly",
            "Quarterly",
            "Semi-Annual",
            "Annual"
        ];

        $scope.submitForm = function () {

        }

    });