NetBeeTicketApp.controller('ntController',
    function ntController($scope, $window, $routeParams, $uibModalInstance, DataService) {

        if ($routeParams.id)
            $scope.customer = DataService.getCustomer($routeParams.id);
        else
            $scope.customer = { id: 0 }
        
        $scope.editableCustomer = angular.copy($scope.customer);

        $scope.subscriptionType = [
            "Monthly",
            "Quarterly",
            "Semi-Annual",
            "Annual"
        ];

        $scope.submitForm = function () {

            if ($scope.editableCustomer.id == 0) {
                // insert new customer
                DataService.insertCustomer($scope.editableCustomer);
            }
            else {
                // update customer
                DataService.updateCustomer($scope.editableCustomer);
                $scope.customer = angular.copy($scope.editableCustomer);
            }

            //$window.history.back();
            $uibModalInstance.close
        };

        $scope.cancelForm = function () {
            //$window.history.back();
            $uibModalInstance.dismiss();
        };

    });