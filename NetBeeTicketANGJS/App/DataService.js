NetBeeTicketApp.factory('DataService',
    function () {
        var getCustomer = function (id) {
            if (id == 123) {
                return {
                    fullName: "Klarinogampros",
                    email: "klarino@gmail.com",
                    subscriptionType: "Annual",
                    isSubscribed: true
                };
            }
            return undefined;
        };

        var insertCustomer = function (newCustomer) {
            return true;
        };

        var updateCustomer = function (customer) {
            return true;
        };

        return {
            insertCustomer: insertCustomer,
            updateCustomer: updateCustomer,
            getCustomer: getCustomer
        };
            
    });

    
