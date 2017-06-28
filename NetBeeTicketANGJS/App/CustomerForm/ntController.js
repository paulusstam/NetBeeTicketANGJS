﻿NetBeeTicketApp.controller('ntController',
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

        //datepicker-popup

        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yyyy',
            maxDate: new Date(2090, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.open2 = function () {
            $scope.popup2.opened = true;
        };

        $scope.setDate = function (year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.altInputFormats = ['d!/M!/yyyy'];

        $scope.popup1 = {
            opened: false
        };

        $scope.popup2 = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [
            {
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
        ];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }

    });